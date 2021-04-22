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

const CalorieFilter = ({ url2, setUrl2, searchUrl, setSearchUrl }) => {

    const classes = useStyles();
    //const [recipesCalories, setRecipesCalories] = useState([])
    let [searchCalories, setSearchCalories] = useState("")
    let [searchProtein, setSearchProtein]= useState("")
    let [searchCarbs, setSearchCarbs]= useState("")
    let [searchFat, setSearchFat]= useState("")

    const handleCaloriesSlider = (e, newValue) => {
        
        setSearchCalories((prevState) => prevState = newValue)


        
        setUrl2((prevState) => {

            prevState = prevState.includes('&calories=') ? 
            
            prevState.split('&')

            prevState +=  searchCalories ? `&calories=${searchCalories}` : ''}
            );
    }

    const handleProteinSlider = (e, newValue) => {
        
        setSearchProtein((prevState) => prevState = newValue)
    
        setUrl2((prevState) => prevState +=  searchProtein ? `&nutrients%5BPROCNT%5D${searchProtein}` : '');
    }

    const handleCarbsSlider = (e, newValue) => {
        
        setSearchCarbs((prevState) => prevState = newValue)
        
        setUrl2((prevState) => prevState +=  searchCarbs ? `&nutrients%5BCHOCDF%5D=${searchCarbs}` : '');
    }

    const handleFatSlider = (e, newValue) => {
        
        setSearchFat((prevState) => prevState = newValue)
        setUrl2((prevState) => prevState +=  searchFat ? `&nutrients%5BFAT%5D=${searchFat}` : '');
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
                    onChange={handleCaloriesSlider}                
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
                    onChange={handleProteinSlider}
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
                    onChange={handleCarbsSlider}
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
                    onChange={handleFatSlider}
                />
            </div>
        </div>
    );

}

export default CalorieFilter