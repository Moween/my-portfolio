import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  btn: {
    padding: '0.43rem',
    // justifyContent: 'space-between',
    textTransform: 'capitalize',
    width: (props) => {
      if (props.colorType === 'yellow') {
        return '180px';
      }
    },
    backgroundColor: (props) => {
      if (props.colorType === 'yellow') {
        return '#f7f124';
      }
    },
    transition: (props) => {
      if (props.colorType === 'yellow') {
        return 'backgroundColor 2s ease 1s';
      }
      return null;
    },
    transitionTimingFunction: 'ease',
    transitionDelay: '1s',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #f7f124',
    },
  },
  
});


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
