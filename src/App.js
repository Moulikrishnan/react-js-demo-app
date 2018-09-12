import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {

  textbox: {
    marginRight: '10px',
    width: '250px'
  },
  app: {
    textAlign: 'center',
    marginTop: '50px',
    borderRadius: '3px',
    padding: '30px',
    boxShadow: '0px 0 5px 0px black',
    minHeight: '400px',
    minWidth: '800px'
  },
  nodatadiv: {
    width: '100%',
    color: '#F44336',
    padding: '10px',
    marginTop: '50px'
  },
  table: {
    marginTop: '50px'
  },
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      entered_name: '',
      list_array: [{ name: 'Moulikrishnan', created_on: '12/09/2018, 09:00:00' }],
    };
  }

  _generateList() {
    return this.state.list_array.map((row, i) => {
      return (
        <TableRow key={i}>
          <TableCell component="th" scope="row">
            {i + 1}
          </TableCell>
          <TableCell numeric>{row.name}</TableCell>
          <TableCell numeric>{row.created_on}</TableCell>
          <TableCell numeric>
            <Button variant="fab" mini color="secondary" aria-label="delete" onClick={() => this._removeItem(i)}>
              <DeleteIcon />
            </Button>
          </TableCell>
        </TableRow>
      );
    }
    );
  }

  _removeItem(key) {
    this.setState({
      list_array: this.state.list_array.filter((_, i) => i !== key)
    });
  }

  _addItem(name) {
    this.state.list_array.push({ name: name, created_on: new Date().toLocaleString() });
    this.setState({ list_array: this.state.list_array, entered_name: '' });
  }

  _addList(classes) {
    return (
      <div>
        <TextField
          label="Enter name"
          autoFocus={true}
          margin="normal"
          value={this.state.entered_name}
          onChange={(e) => this.setState({ entered_name: e.target.value })}
          className={classes.textbox}
          inputProps={{ maxLength: 100 }}
        />
        <Button variant="contained" disabled={this.state.entered_name === ''} color="primary" onClick={() => this._addItem(this.state.entered_name)}> Add </Button>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0} direction="column" alignItems="center" justify="center" >
        <div className={classes.app}>
          {this._addList(classes)}
          {this.state.list_array.length > 0 ?
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Serial No.</TableCell>
                  <TableCell numeric>Name</TableCell>
                  <TableCell numeric>Created on</TableCell>
                  <TableCell numeric>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this._generateList()}
              </TableBody>
            </Table>
            :
            <div className={classes.nodatadiv}>No data available..!!</div>
          }
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);