import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { contactMeans } from '../utils/data';
import { MediaQueryContext } from './App';
import { useStyles } from '../utils/styles';

const Cards = () => {
  const { mobile, tablet } = useContext(MediaQueryContext);
  const { contactCard, contactCardInfo } = useStyles();
  const iconsArr = [<PhoneIcon />, <EmailIcon />, <LocationOnIcon />];

  return (
    <Box
      sx={{
        width: tablet ? '90%' : '70%',
        height: mobile ? '100%' : 'auto',
        m: '0 auto',
        display: 'flex',
        flexDirection: mobile ? 'column' : 'row',
        flexWrap: tablet ? 'wrap' : 'no-wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: mobile || tablet ? 'space-between' : '',
        position: 'relative',
      }}
    >
      {contactMeans.map((card, index) => (
        <Card
          className={contactCard}
          key={index}
          sx={{ m: index === 2 && tablet ? '0.5rem auto' : '' }}
        >
          <CardContent
            className={contactCardInfo}
            sx={{
              justifyContent: index === 1 ? 'space-between' : 'space-evenly',
            }}
          >
            <Box
              className="blinking"
              sx={{
                width: '40px',
                height: '40px',
                border: '3px solid black',
                borderRadius: '50%',
              }}
            >
              {iconsArr[index]}
            </Box>
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ fontSize: 14 }} gutterBottom>
                {card.action}
              </Typography>
              <Typography variant="body2">{card.details}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
