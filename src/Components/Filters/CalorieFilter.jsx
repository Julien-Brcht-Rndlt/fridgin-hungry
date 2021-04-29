import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import './CalorieFilter.css'

const useStyles = makeStyles({
    root: {
        color: 'black',
        width: '100%',
    },
    valueLabel: {
        fontSize: '1rem'
    }
})

const CalorieFilter = ({ searchUrl, setSearchUrl }) => {

    const classes = useStyles()

    let [searchCalories, setSearchCalories] = useState('')
    let [searchProtein, setSearchProtein]= useState('')
    let [searchCarbs, setSearchCarbs]= useState('')
    let [searchFat, setSearchFat]= useState('')

    // function to update/refresh dynamically url
    const updateUrlParams = (url, param, value) => {
        
        let urlParts = url? url.split('&') : [];
        urlParts = urlParts.map((urlPart) => urlPart.includes(`${param}`) ? value : urlPart)

        return urlParts.join('&');
    }

    // function to remove null value from url
    const removeUrlNullValues = (url, param) => url.includes(`&${param}=0`) ? url.replace(`&${param}=0`,'') : url

    //TODO: factorise all the handleXXXXSlider()
    const handleCaloriesSlider = (e, newValue) => {
        
        setSearchCalories((prevState) => prevState = newValue)

        searchUrl = searchUrl.includes('calories=') ? updateUrlParams(searchUrl, 'calories', `calories=${searchCalories}`) : `${searchUrl}&calories=${searchCalories}`

        searchUrl = removeUrlNullValues(searchUrl, 'calories')

        setSearchUrl(searchUrl)
    }

    const handleProteinSlider = (e, newValue) => {
        
        setSearchProtein((prevState) => prevState = newValue)

        searchUrl = searchUrl.includes('nutrients%5BPROCNT%5D5=') ? updateUrlParams(searchUrl, 'nutrients%5BPROCNT%5D5', `nutrients%5BPROCNT%5D5=${searchProtein}`) : `${searchUrl}&nutrients%5BPROCNT%5D5=${searchProtein}`

        searchUrl = removeUrlNullValues(searchUrl, 'nutrients%5BPROCNT%5D5')

        setSearchUrl(searchUrl)
    }

    const handleCarbsSlider = (e, newValue) => {
        
        setSearchCarbs((prevState) => prevState = newValue)

        searchUrl = searchUrl.includes('nutrients%5BCHOCDF%5D=') ? updateUrlParams(searchUrl, 'nutrients%5BCHOCDF%5D', `nutrients%5BCHOCDF%5D=${searchCarbs}`) : `${searchUrl}&nutrients%5BCHOCDF%5D=${searchCarbs}`

        searchUrl = removeUrlNullValues(searchUrl, 'nutrients%5BCHOCDF%5D')

        setSearchUrl(searchUrl)
    }

    const handleFatSlider = (e, newValue) => {
        
        setSearchFat((prevState) => prevState = newValue)

        searchUrl = searchUrl.includes('nutrients%5BFAT%5D=') ? updateUrlParams(searchUrl, 'nutrients%5BFAT%5D', `nutrients%5BFAT%5D=${searchFat}`) : `${searchUrl}&nutrients%5BFAT%5D=${searchFat}`

        searchUrl = removeUrlNullValues(searchUrl, 'nutrients%5BFAT%5D')

        setSearchUrl(searchUrl)
    }

    return (
        <div className='calorieFilter'>
            <h3>Macros</h3>
            <div className='sliders'>
                <div>
                    <Typography
                    align='center'
                    variant='h5'>Calories (kcal/pers)
                    </Typography>
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
                    align='center'
                    variant='h5'>Protein (g/pers)</Typography>
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
                    align='center'
                    variant='h5'>Carbs (g/pers)</Typography>
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
                    align='center'
                    variant='h5'>Fat (g/pers)</Typography>
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
        </div>
    )

}

export default CalorieFilter