import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../utils/styles';

const MyButton = (props) => {
  const { btn } = useStyles(props);
  const { value, href, endIcon, sx, type } = props;
  return (
    <Button
      variant="contained" 
      className={btn}
      size="small" 
      endIcon={endIcon}
      href={href}
      target="new"
      sx={{...sx}}
      type={type}
    >
      {value}
    </Button>
  )
}

export default MyButton;
