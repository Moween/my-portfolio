import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../utils/styles';

const MyButton = (props) => {
  const { btn } = useStyles(props);
  const { value, href, endIcon } = props;
  return (
    <Button
      variant="contained" 
      // color="primary"
      className={btn}
      size="small" 
      endIcon={endIcon}
      href={href}
      target="new"
    >
      {value}
    </Button>
  )
}

export default MyButton;
