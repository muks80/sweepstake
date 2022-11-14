import React, { useState } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayerTable from './PlayerTable';
import image from '../images/fifa-world-cup-qatar-2022-symbol-official-logo-mondial-champion-symbol-design-abstract-illustration-with-maroon-background-free-vector.jpg';
import Button from './inputs/Button';
import TextField from './inputs/TextField';

let teams = [
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
        { country: 'Belgium',
          flagIconCode: 'flag-icon-be',
          player: '',
          id: null
        },
        { country: 'Netherlands',
          flagIconCode: 'flag-icon-nl',
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
        { country: 'Spain',
          flagIconCode: 'flag-icon-es',
          player: '',
          id: null
        }, 
        { country: 'Poland',
          flagIconCode: 'flag-icon-pl',
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
        },
        { country: 'Argentina',
          flagIconCode: 'flag-icon-ar',
          player: '',
          id: null
        },
        { country: 'Australia',
          flagIconCode: 'flag-icon-au',
          player: '',
          id: null
        },
        { country: 'Brazil',
          flagIconCode: 'flag-icon-br',
          player: '',
          id: null
        },
        { country: 'Cameroon',
          flagIconCode: 'flag-icon-cm',
          player: '',
          id: null
        },
        { country: 'Canada',
          flagIconCode: 'flag-icon-ca',
          player: '',
          id: null
        },
        { country: 'Costa Rica',
          flagIconCode: 'flag-icon-cr',
          player: '',
          id: null
        },
        { country: 'Ecuador',
          flagIconCode: 'flag-icon-ec',
          player: '',
          id: null
        },
        { country: 'Ghana',
          flagIconCode: 'flag-icon-gh',
          player: '',
          id: null
        },
        { country: 'Iran',
          flagIconCode: 'flag-icon-ir',
          player: '',
          id: null
        },
        { country: 'Japan',
          flagIconCode: 'flag-icon-jp',
          player: '',
          id: null
        },
        { country: 'Mexico',
          flagIconCode: 'flag-icon-mx',
          player: '',
          id: null
        },
        { country: 'Morocco',
          flagIconCode: 'flag-icon-ma',
          player: '',
          id: null
        },
        { country: 'Qatar',
          flagIconCode: 'flag-icon-qa',
          player: '',
          id: null
        },
        { country: 'Senegal',
          flagIconCode: 'flag-icon-sn',
          player: '',
          id: null
        },
        { country: 'Saudi Arabia',
          flagIconCode: 'flag-icon-sa',
          player: '',
          id: null
        },
        { country: 'Serbia',
          flagIconCode: 'flag-icon-rs',
          player: '',
          id: null
        },
        { country: 'South Korea',
          flagIconCode: 'flag-icon-kr',
          player: '',
          id: null
        },
        { country: 'Tunisia',
          flagIconCode: 'flag-icon-tn',
          player: '',
          id: null
        },
        { country: 'USA',
          flagIconCode: 'flag-icon-us',
          player: '',
          id: null
        },
        { country: 'Uruguay',
          flagIconCode: 'flag-icon-uy',
          player: '',
          id: null
        },
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
            marginBottom: '30px',
            height: '200px',
            width: '200px'
        },
        paper: {
            marginLeft: '480px', 
            marginRight: '480px', 
            border: 'solid 2px #8A1538', 
            paddingTop: '10px',
            [theme.breakpoints.down('md')]: {
                marginLeft: '350px', 
                marginRight: '350px', 
                border: 'solid 2px #8A1538', 
                paddingTop: '10px'
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: '200px', 
                marginRight: '200px', 
                border: 'solid 2px #8A1538', 
                paddingTop: '10px'
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '10px', 
                marginRight: '10px', 
                border: 'solid 2px #8A1538', 
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
