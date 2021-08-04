import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: '20px'
        }
    }
})

export default function Button(props) {
    const { className, text, size, type, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <div>
            <MuiButton
                color='secondary'
                classes={props.classes || {
                    root: classes.root  
                }}
                variant={variant || 'contained'}
                size={size || 'medium'}
                type={type || 'submit'}
                onClick={onClick}
                {...other}
            >
                {text}
            </MuiButton>
        </div>
    )
}
