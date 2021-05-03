import React, { useState } from 'react'
import axios from 'axios'
import RecipeCard from '../RecipeCard/RecipeCard'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./RecipeCards.css"
import HashNavButton from '../NavButtons/HashNavButton'
import RecipeCardDetail from '../RecipeCardDetail/RecipeCardDetail'
import CardAnim from './CardAnim'
import AlertMessage from '../AlertMessage/AlertMessage'



const RecipeCards = ({ searchUrl, searchResults, setSearchResults, setSearchUrl }) => {
 
    const [start, setStart] = useState(0)
    const [step, setStep] = useState(10)

    // random prep time
    const prepTimes = [15, 30, 45, 60]
    const randomPrepTime = () => prepTimes[Math.floor(Math.random() * 4)]

    const updateUrlNext = (url, param, value) => {
        const startIndex = url.indexOf(param)
        let endOfParam = url.substr(startIndex, url.length).indexOf('&')
        endOfParam = endOfParam > -1 ? endOfParam : url.length
        const urlPart = url.substr(startIndex, endOfParam)
        url = url.replace(urlPart, `${param}${value}`)

        return url;
    }

    const onClickHandler = () => {

        // define next step
        const end = start + step
        
        //https://api.edamam.com/search?q=chicken, tomato, cheese&app_id=f604900f&app_key=b523b505a718166bca1753372a51616f&from=40&to=50
        //searchUrl
        searchUrl = searchUrl.includes('&from=') ? updateUrlNext(searchUrl, 'from=', start) : `${searchUrl}&from=${start}`
        searchUrl = searchUrl.includes('&to=') ? updateUrlNext(searchUrl, 'to=', end) : `${searchUrl}&to=${end}`

        setSearchUrl(searchUrl)

        console.log('searchUrl: ' + searchUrl)

        // fetch API with axios
        axios
            .get(searchUrl)
            .then((response) => response.data)
            .then((data) => {
                // grab API data + populate our own recipe JS objects
                const recipeProperties = ['label', 'image', 'yield', 'totalTime', 'calories', 'healthLabels', 'dietLabels', 'totalNutrients', 'ingredientLines', 'url']
                let recipes = []
                data.hits.map((recipeData) => {
                    const recipe = {}
                    recipeProperties.forEach((property) => {
                        recipe[property] = recipeData['recipe'][property]
                    })
                    recipe.totalTime = recipe.totalTime !== 0 ? recipe.totalTime : randomPrepTime()
                    recipes = [...recipes, recipe]
                })

                 // save new recipes searchResults state
                setSearchResults((prevState) => [...prevState, ...recipes] )
            })
        // next start
        setStart(end)
    }

const { id } = useParams()
const cardId = id ? parseInt(id) : undefined

const showCardDetail = cardId !== undefined && searchResults
const cardDetail =  showCardDetail ? searchResults[cardId] : undefined


    return (
        <div>
            <HashNavButton title={'Launch a new search'} to={'/home#filters'}/>
            <div className="recipe-cards">
            { showCardDetail &&
               <Link to='/recipes'>
                    <RecipeCardDetail
                        label={cardDetail.label}
                        image={cardDetail.image}
                        servings={cardDetail.yield}
                        totalTime={cardDetail.totalTime}
                        calories={(cardDetail.calories).toFixed(2)}
                        allergyFilter={(cardDetail.healthLabels).map((label, i) => <li key={i}>{label}</li>)}
                        dietLabel={cardDetail.dietLabels}
                        cholesterol={(cardDetail.totalNutrients.CHOLE.quantity).toFixed(2)}
                        sodium={(cardDetail.totalNutrients.NA.quantity).toFixed(2)}
                        fiber={(cardDetail.totalNutrients.FIBTG.quantity).toFixed(2)}
                        Sugar={(cardDetail.totalNutrients.SUGAR.quantity).toFixed(2)}
                        carbs={(cardDetail.totalNutrients.CHOCDF.quantity).toFixed(2)}
                        proteins={(cardDetail.totalNutrients.PROCNT.quantity).toFixed(2)}
                        fat={(cardDetail.totalNutrients.FAT.quantity).toFixed(2)}
                        saturatedFat={(cardDetail.totalNutrients.FASAT.quantity).toFixed(2)}
                        ingredients={(cardDetail.ingredientLines).map((ingredient, i) => <li key={i}>{ingredient}</li>)} 
                        url={cardDetail.url}/>
                </Link>
            }

            {  searchResults.length === 0 ? <AlertMessage />  : 
                searchResults.map((card, index) => 
                    <HashLink to={`/recipes/${index}#card-detail`} scroll={(element) => element.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })}>
                        { (!showCardDetail || cardId !== index) &&
                            <CardAnim rotation={5} timing={150}>
                                <RecipeCard
                                    key={index}
                                    label={card.label}
                                    image={card.image}
                                    servings={card.yield}
                                    totalTime={card.totalTime}
                                    dietLabel={card.dietLabels}
                                    />
                            </CardAnim>
                        }
                    </HashLink>)
                }
        
            </div>
            <div className='viewmore-container'>
            <button onClick={onClickHandler} className='viewmore-button'>View More</button>
            </div>
           
        </div>
        
    )
}

export default RecipeCards