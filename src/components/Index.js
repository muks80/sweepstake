import React, { useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayerTable from './PlayerTable';
import image from '../images/download.png';
import Button from './inputs/Button';
import TextField from './inputs/TextField';

let teams = [
        { country: 'Turkey',
          flagIconCode: 'flag-icon-tr',
          player: '',
          id: null
        },
        { country: 'Italy',
          flagIconCode: 'flag-icon-it',
          player: '',
          id: null
        },
        { country: 'Switzerland',
          flagIconCode: 'flag-icon-ch',
          player: '',
          id: null
        },
        { country: 'Wales',
          flagIconCode: 'flag-icon-gb-wls',
          player: '',
          id: null
        },
        { country: 'Denmark',
          flagIconCode: 'flag-icon-dk',
          player: '',
          id: null
        },
        { country: 'Finland',
          flagIconCode: 'flag-icon-fi',
          player: '',
          id: null
        },
        { country: 'Belgium',
          flagIconCode: 'flag-icon-be',
          player: '',
          id: null
        },
        { country: 'Russia',
          flagIconCode: 'flag-icon-ru',
          player: '',
          id: null
        },
        { country: 'Netherlands',
          flagIconCode: 'flag-icon-nl',
          player: '',
          id: null
        },
        { country: 'Ukraine',
          flagIconCode: 'flag-icon-ua',
          player: '',
          id: null
        },
        { country: 'Austria',
          flagIconCode: 'flag-icon-at',
          player: '',
          id: null
        },
        { country: 'Slovakia',
          flagIconCode: 'flag-icon-sk',
          player: '',
          id: null
        },
        { country: 'England',
          flagIconCode: 'flag-icon-gb-eng',
          player: '',
          id: null
        },
        { country: 'Croatia',
          flagIconCode: 'flag-icon-hr',
          player: '',
          id: null
        },
        { country: 'Scotland',
          flagIconCode: 'flag-icon-gb-sct',
          player: '',
          id: null
        },
        { country: 'Czech Republic',
          flagIconCode: 'flag-icon-cz',
          player: '',
          id: null
        },
        { country: 'Spain',
          flagIconCode: 'flag-icon-es',
          player: '',
          id: null
        },
        { country: 'Sweden',
          flagIconCode: 'flag-icon-se',
          player: '',
          id: null
        },
        { country: 'Poland',
          flagIconCode: 'flag-icon-pl',
          player: '',
          id: null
        },
        { country: 'North Macedonia',
          flagIconCode: 'flag-icon-mk',
          player: '',
          id: null
        },
        { country: 'Hungary',
          flagIconCode: 'flag-icon-hu',
          player: '',
          id: null
        },
        { country: 'Portugal',
          flagIconCode: 'flag-icon-pt',
          player: '',
          id: null
        },
        { country: 'France',
          flagIconCode: 'flag-icon-fr',
          player: '',
          id: null
        },
        { country: 'Germany',
          flagIconCode: 'flag-icon-de',
          player: '',
          id: null
        }
]

const initialValues = {
    input: '',
    teams: ''
}

const useStyles = makeStyles((theme) => {
    return {
        root: {
            background: theme.palette.primary.main,
            position: 'absolute',
            minHeight: '100%',
            width: '100%'
        },
        grid: {
            justifyContent: 'center'
        },
        image: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '30px',
            marginBottom: '30px'
        },
        paper: {
            marginLeft: '480px', 
            marginRight: '480px', 
            border: 'solid 2px #007a8c', 
            paddingTop: '10px',
            [theme.breakpoints.down('md')]: {
                marginLeft: '350px', 
                marginRight: '350px', 
                border: 'solid 2px #007a8c', 
                paddingTop: '10px'
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: '200px', 
                marginRight: '200px', 
                border: 'solid 2px #007a8c', 
                paddingTop: '10px'
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '10px', 
                marginRight: '10px', 
                border: 'solid 2px #007a8c', 
                paddingTop: '10px'
            }
        },
        h3: {
            textAlign: 'center',
            color: '#eeeeee',
            fontFamily: 'Stalinist One',
            marginBottom: '50px'
        },
        p: {
            color: '#eeeeee',
            textAlign: 'center',
            marginBottom: '30px'
        },
        resetButtonRoot: {
            margin: '20px',
            background: '#eeeeee',
        },
        resetButtonLabel: {
            color: 'black'
        }
    }
})

export default function Index() {
    const [selected, setSelected] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [num, setNum] = useState(1);
    const classes = useStyles();

    const handleInputChange = e => {
        setValues({...values, input: e.target.value});
    }

    const validate = () => {
        let temp = {}
            temp.input = values.input ? "" : "Player name required"
            temp.teams = teams.length ? "" : "All teams selected"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }
    
    const randomTeam = () => {
        const randomTeamIndex = [Math.floor(Math.random() * teams.length)];
        let selectedTeam = teams[randomTeamIndex];
        teams.splice(randomTeamIndex, 1);
        selectedTeam = {...selectedTeam, player: values.input, id: num}
        setSelected([...selected, selectedTeam]);
        setValues({...values, input: ''});
        setNum(num + 1);
        console.log(teams, selected);
    }

    const selectTeam = () => {
        if(validate()){
            randomTeam();
        }
    }

    const reset = () => {
        teams = teams.concat(selected);
        setSelected([]);
        setValues({input: '', teams: ''});
        setErrors({});
        setNum(1);
    }

    return (
        <div className={classes.root}>
            <img src={image} className={classes.image}/>
            <Typography variant='h3' className={classes.h3}>Sweepstake Picker</Typography>
            <div className={classes.p}>
                <Typography variant='p' >Enter player name and select 1 of 24 teams for each player in your Euro 2020 sweepstake</Typography>
            </div>
            <Paper className={classes.paper}>
            <Grid container className={classes.grid}>
                <Grid>
                    <TextField
                        value={values.input}
                        onChange={handleInputChange}
                        errors={errors}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.grid}>
                <Grid>    
                    <Button
                        text='Select Team'
                        onClick={selectTeam}
                    />
                </Grid>
                <Grid>
                    <Button
                        text='Reset'
                        onClick={reset}
                        classes={{
                            root: classes.resetButtonRoot, 
                            label: classes.resetButtonLabel
                        }}
                    />
                </Grid>
            </Grid>
            </Paper>
            <PlayerTable selected={selected}/>
        </div>
    )
}
