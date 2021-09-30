import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme) => ({
  
}))

const MyButton = (props) => {
  const { value, href } = props;
  return (
    <Button
      variant="contained" 
      color="primary"
      size="small" 
      endIcon={<OpenInNewIcon />}
      href={href}
      target="new"
    >
      {value}
    </Button>
  )
}

export default MyButton;
