import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles/IndexTable.css';
import { withRouter } from "react-router-dom";

class IndexTable extends React.Component {

  constructor(props) {
    super(props);
    this.selectProfile = this.selectProfile.bind(this);
  };

  selectProfile(uid){
    this.props.history.push("/id/"+uid);
  }

  render() {


    return (
      <div >
        <Paper className='indexTable-container'>
          <Table className='indexTableHeader'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left" className='resultDetails-cell'>Phone Number</TableCell>
                <TableCell align="left" className='resultDetails-cell'>Personal Email</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div className='indexTableResults-container'>
          <Table className='indexTableResults'>
          <TableHead></TableHead>
            <TableBody>
              {this.props.contacts.map(row => (
                <TableRow key={row.id} onClick={() => this.selectProfile(row.id)}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.phoneNumber}</TableCell>
                  <TableCell align="left">{row.personalEmail}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(IndexTable);
