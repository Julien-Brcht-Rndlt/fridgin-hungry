import React, { useState } from 'react'
import axios from 'axios'
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './CalorieFilter.css'

const useStyles = makeStyles({
    root: {
        color: 'black',
        width: '15rem',
    },
    valueLabel: {
        fontSize: '1rem'
    }
})

const CalorieFilter = ({setSearchResults}) => {

    const classes = useStyles();
    //const [recipesCalories, setRecipesCalories] = useState([])
    let [searchCalories, setSearchCalories] = useState("")
    let [searchProtein, setSearchProtein]= useState("")
    let [searchCarbs, setSearchCarbs]= useState("")
    let [searchFat, setSearchFat]= useState("")

    const searchRecipes = () => {
        let searchUrl = `https://api.edamam.com/search?app_id=f604900f&app_key=b523b505a718166bca1753372a51616f&q=chicken`
        
        searchUrl += searchCalories ? `&calories=${searchCalories}` : ''
        searchUrl += searchProtein ? `&nutrients%5BPROCNT%5D${searchProtein}` : ''
        searchUrl += searchCarbs ? `&nutrients%5BCHOCDF%5D=${searchCarbs}` : ''
        searchUrl += searchFat ? `&nutrients%5BFAT%5D=${searchFat}` : ''
        console.log(searchUrl);

        axios
            .get(searchUrl)
            .then((response) => response.data)
            .then((data) => {
                setSearchResults(data.hits)
            }); 
    }

    return (
        <div className="calorieFilter">
            <div>
                <Typography
                    align="center"
                    variant="h5">Calories (kcal/pers)</Typography>
                <Slider
                    classes={{
                        root: classes.root,
                        valueLabel: classes.valueLabel
                    }}
                    min={0}
                    max={1500}
                    defaultValue={0}
                    valueLabelDisplay='auto'
                    getAriaValueText={() => `${setSearchCalories}`}
                    value={searchCalories}
                    onChange={(e, newValue) => {
                        setSearchCalories((prevState) => prevState = newValue)
                        console.log(newValue)
                    }}                
                />
                
            </div>
            <div>
                <Typography
                    align="center"
                    variant="h5">Protein (g/pers)</Typography>
                <Slider
                    classes={{
                        root: classes.root,
                        valueLabel: classes.valueLabel
                    }}
                    min={0}
                    max={100}
                    defaultValue={0}
                    valueLabelDisplay='auto'
                    value={searchProtein}
                    onChange={(e, newValue) => {
                        setSearchProtein((prevState) => prevState = newValue)
                        console.log(newValue)}}
                />
            </div>
            <div>
                <Typography
                    align="center"
                    variant="h5">Carbs (g/pers)</Typography>
                <Slider
                    classes={{
                        root: classes.root,
                        valueLabel: classes.valueLabel
                    }}
                    min={0}
                    max={100}
                    defaultValue={0}
                    valueLabelDisplay='auto'
                    value={searchCarbs}
                    onChange={(e, newValue) => {
                        setSearchCarbs((prevState) => prevState = newValue)
                        }}
                />
            </div>
            <div>
                <Typography
                    align="center"
                    variant="h5">Fat (g/pers)</Typography>
                <Slider
                    classes={{
                        root: classes.root,
                        valueLabel: classes.valueLabel
                    }}
                    min={0}
                    max={100}
                    defaultValue={0}
                    valueLabelDisplay='auto'
                    value={searchFat}
                    onChange={(e, newValue) => {
                        setSearchFat((prevState) => prevState = newValue)
                        }}
                />
            </div>
            <button onClick={searchRecipes}>Search</button>
        </div>
    );

}

export default CalorieFilter