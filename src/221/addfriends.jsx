import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "./221.css";

export default function AddFriends(props) {

  const handleChange = (e) => {
    props.toggleFriends(e);
  };

  return (
    <>
    <div className="inside221Container add-friends">
    <FormControl component="fieldset">
      <FormLabel component="legend">Add Friends</FormLabel>
      <FormGroup row>
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="danny" />}
          label="Danny"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="gabe" />}
          label="Gabe"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="john" />}
          label="John"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="kaiden" />}
          label="Kaiden"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="justin" />}
          label="Justin"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="susan" />}
          label="Susan"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="kayoung" />}
          label="Kayoung"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="joice" />}
          label="Joice"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="hannah" />}
          label="Hannah"
        />
        <FormControlLabel
          control={<Switch size="small" onChange={handleChange} name="annie" />}
          label="Annie"
        />
      </FormGroup>
      </FormGroup>
    </FormControl>
    </div>
    </>
  );
}