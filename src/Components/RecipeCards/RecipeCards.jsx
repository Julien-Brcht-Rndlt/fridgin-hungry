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
 
    const [start, setStart] = useState(10)
    const [step, setStep] = useState(10)

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

        const end = start + step

        let url = searchUrl;
        
        url = `${url}&from=${start}`
        url = `${url}&to=${end}`

        axios
            .get(url)
            .then((response) => response.data)
            .then((data) => {
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
                setSearchResults((prevState) => [...prevState, ...recipes] )
            })
        setStart(end + 1)
    }

const { id } = useParams()
const cardId = id ? parseInt(id) : undefined

const showCardDetail = cardId !== undefined && searchResults
const cardDetail =  showCardDetail ? searchResults[cardId] : undefined
    return (
        <div>
            <HashNavButton title={'Launch a new search'} to={'/home#filters'}/>
            <div className="top-card">
                { showCardDetail &&
                <Link to='/recipes'>
                    <RecipeCardDetail
                        label={cardDetail.label}
                        image={cardDetail.image}
                        servings={(cardDetail.yield).toFixed()}
                        totalTime={cardDetail.totalTime}
                        calories={(cardDetail.calories).toFixed(2)}
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
                        url={cardDetail.url}
                        healthLabels={[cardDetail.healthLabels]}>
                    </RecipeCardDetail>
                </Link>
                }
            </div>
            <div className="recipe-cards">
                {  searchResults.length === 0 ? <AlertMessage />  : 
                    searchResults.map((card, index) => 
                    <HashLink to={`/recipes/${index}#card-detail`} scroll={(element) => element.scrollIntoView({    behavior: 'auto', block: 'center', inline: 'nearest' })}>
                        { (!showCardDetail || cardId !== index) &&
                            <CardAnim rotation={5} timing={150}>
                                <RecipeCard
                                    key={index}
                                    label={card.label}
                                    image={card.image}
                                    servings={(card.yield).toFixed()}
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