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

const CalorieFilter = () => {
    
   const classes = useStyles();

    return (
        <div className="calorieFilter">
            <div>
            <Typography
            align="center"
            variant="h5">Calories</Typography>
            <Slider
            classes={{
                root: classes.root,
                valueLabel: classes.valueLabel
            }}
            progress
            min={0}
            max={1500}
            defaultValue={0}
            valueLabelDisplay='auto'
            />
            </div>
            <div>
            <Typography
            align="center"
            variant="h5">Protein</Typography>
            <Slider
            classes={{
                root: classes.root,
                valueLabel: classes.valueLabel
            }}
            progress
            min={0}
            max={100}
            defaultValue={0}
            valueLabelDisplay='auto'
            />
            </div>
            <div>
            <Typography
            align="center"
            variant="h5">Carbs</Typography>
            <Slider
            classes={{
                root: classes.root,
                valueLabel: classes.valueLabel
            }}
            progress
            min={0}
            max={100}
            defaultValue={0}
            valueLabelDisplay='auto'
            />
            </div>
            <div>
            <Typography
            align="center"
            variant="h5">Fat</Typography>
            <Slider
            classes={{
                root: classes.root,
                valueLabel: classes.valueLabel
            }}
            progress
            min={0}
            max={100}
            defaultValue={0}
            valueLabelDisplay='auto'
            />
            </div>
            
        </div>
    );

}

export default CalorieFilter