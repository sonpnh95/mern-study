import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Card, CardContent, CardActions, TextField } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import axios from 'axios';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    minWidth: 600,
  },
  textcenter: {
    textAlign: "center"
  },
  formPadding: {
    paddingLeft: 20,
    paddingRight: 20
  },
  inputSpacing: {
    marginBottom: 20,
  },
  buttonAction: {
    justifyContent: "center",
    marginBottom: 20,
  }
});

const UsersAdd = props => {
  const { open, handleClose } = props;
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleClick = () => {
    let user = {
      username: username,
      fullname: fullname,
      phone: phone,
      password: password
    }

    axios({
      method: 'post',
      url: 'http://localhost:5000/users/add',
      data: user
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle className={classes.textcenter}>Form User</DialogTitle>
      <Card className={classes.root}>
        <CardContent>
          <form className={classes.formPadding} noValidate autoComplete="off">
            <TextField 
              className={classes.inputSpacing} 
              required 
              label="User Name" 
              fullWidth
              value={username}
              onChange={e => setUserName(e.target.value)}
            />
            <TextField 
              className={classes.inputSpacing} 
              required 
              label="Full Name" 
              fullWidth
              value={fullname}
              onChange={e => setFullName(e.target.value)}
            />
            <TextField 
              className={classes.inputSpacing} 
              required 
              label="Phone" 
              fullWidth
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <TextField 
              type="password" 
              className={classes.inputSpacing} 
              required 
              label="Password" 
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </form>
        </CardContent>
        <CardActions className={classes.buttonAction}>
        <Button 
          startIcon={<AddIcon />} 
          variant="contained" 
          color="primary"
          onClick={handleClick}
        >
          Add User
        </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}

UsersAdd.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default UsersAdd;
  