import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
    let [searchProtein, setSearchProtein] = useState('')
    let [searchCarbs, setSearchCarbs] = useState('')
    let [searchFat, setSearchFat] = useState('')

    // function to update/refresh dynamically url
    const updateUrlParams = (url, param, value) => {

        let urlParts = url ? url.split('&') : [];
        urlParts = urlParts.map((urlPart) => urlPart.includes(`${param}`) ? value : urlPart)

        return urlParts.join('&');
    }

    // function to remove null value from url
    const removeUrlNullValues = (url, param) => url.includes(`&${param}=0`) ? url.replace(`&${param}=0`, '') : url

    //TODO: factorise all the handleXXXXSlider()
    const handleCaloriesSlider = (newValue) => {

        setSearchCalories((prevState) => prevState = newValue)

        let url = searchUrl;

        url = url.includes('calories=') ? updateUrlParams(url, 'calories', `calories=${searchCalories}`) : `${url}&calories=${searchCalories}`

        url = removeUrlNullValues(url, 'calories')

        setSearchUrl(url)
    }

    const handleProteinSlider = (newValue) => {

        setSearchProtein((prevState) => prevState = newValue)

        let url = searchUrl;

        url = url.includes('nutrients%5BPROCNT%5D5=') ? updateUrlParams(url, 'nutrients%5BPROCNT%5D5', `nutrients%5BPROCNT%5D5=${searchProtein}`) : `${url}&nutrients%5BPROCNT%5D5=${searchProtein}`

        url = removeUrlNullValues(url, 'nutrients%5BPROCNT%5D5')

        setSearchUrl(url)
    }

    const handleCarbsSlider = (newValue) => {

        setSearchCarbs((prevState) => prevState = newValue)

        let url = searchUrl;

        url = url.includes('nutrients%5BCHOCDF%5D=') ? updateUrlParams(url, 'nutrients%5BCHOCDF%5D', `nutrients%5BCHOCDF%5D=${searchCarbs}`) : `${url}&nutrients%5BCHOCDF%5D=${searchCarbs}`

        url = removeUrlNullValues(url, 'nutrients%5BCHOCDF%5D')

        setSearchUrl(url)
    }

    const handleFatSlider = (newValue) => {

        setSearchFat((prevState) => prevState = newValue)

        let url = searchUrl;

        url = url.includes('nutrients%5BFAT%5D=') ? updateUrlParams(url, 'nutrients%5BFAT%5D', `nutrients%5BFAT%5D=${searchFat}`) : `${url}&nutrients%5BFAT%5D=${searchFat}`

        url = removeUrlNullValues(url, 'nutrients%5BFAT%5D')

        setSearchUrl(url)
    }

    return (
        <div className='calorieFilter'>
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