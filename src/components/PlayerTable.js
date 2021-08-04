import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => {
  return {
      row: {
        '& .MuiTableCell-root': {
          padding: theme.spacing(0.6,1,0.6,1),
        }
      },
      paper: {
        marginTop: '20px', 
        marginLeft: '200px', 
        marginRight: '200px', 
        border: '2px solid #007a8c',
        [theme.breakpoints.down('sm')]: {
          marginLeft: '200x', 
          marginRight: '200px', 
          border: 'solid 2px #007a8c', 
          paddingTop: '10px'
        },
        [theme.breakpoints.down('xs')]: {
          marginLeft: '5px', 
          marginRight: '5px', 
          border: 'solid 2px #007a8c', 
          paddingTop: '10px'
        },
      }
    }
  });

export default function PlayerTable(props) {
    const { selected } = props;
    const classes = useStyles();

    return (
      <Paper className={classes.paper}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell style={{textAlign: 'center', fontWeight: 'bold'}}>Player #</TableCell>
                <TableCell style={{textAlign: 'center', fontWeight: 'bold'}}>Player Name</TableCell>
                <TableCell style={{textAlign: 'center', fontWeight: 'bold'}}>Team</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selected.map((row) => (
                <TableRow key={row.id} className={classes.row}>
                  <TableCell style={{textAlign: 'center'}}>
                    {row.id}
                  </TableCell>
                  <TableCell style={{textAlign: 'center'}}>
                    {row.player}
                  </TableCell>
                  <TableCell style={{textAlign: 'center'}}>
                      <span className={`${row.flagIconCode} flag-icon`}></span>
                      <p style={{display: 'inline', margin: '10px'}}>{row.country}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    )
}
