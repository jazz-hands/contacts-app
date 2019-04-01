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

class IndexTable extends React.Component {

  constructor(props) {
    super(props);
    let id = 0;
    this.createData = this.createData.bind(this);
  };

  createData(fname, lname, phoneNumber, school1) {
    let newId = this.id + 1;
    return { fname, lname, phoneNumber, school1 };
  };

  render() {

    const rows = [
      this.createData('Jasmine', 'Quintana', '704-467-4836', 'UNC Charlotte'),
      this.createData('Elon', 'Musk', '704-999-8565', 'Stanford'),
      this.createData('Chris', 'Boothe', '704-154-8735', 'University of Virgina'),
      this.createData('Monica', 'Frake', '704-478-8745', 'SUNY Maritime'),
      this.createData('Emily', 'Best', '980-622-8778', 'UNC Charlotte'),
      this.createData('Danielle', 'Hostetler', '980-678-1515', 'The Ohio State University'),
      this.createData('Stern', 'Tigler', '704-467-4836', 'Clemson'),
      this.createData('Greg', 'Cline', '704-467-4836', 'Johnson and Wales University'),
    ];

    return (
      <div >
        <Paper className='indexTable-container'>
          <Table className='indexTableHeader'>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right" className='resultDetails-cell'>Last Name</TableCell>
                <TableCell align="right" className='resultDetails-cell'>Phone Number</TableCell>
                <TableCell align="right" className='resultDetails-cell'>Undergrad 1</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <div className='indexTableResults-container'>
          <Table className='indexTableResults'>
          <TableHead></TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.fname}
                  </TableCell>
                  <TableCell align="right">{row.lname}</TableCell>
                  <TableCell align="right">{row.phoneNumber}</TableCell>
                  <TableCell align="right">{row.school1}</TableCell>
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

export default IndexTable;
