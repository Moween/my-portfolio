import React from 'react';
import Box from '@material-ui/core/Box';
import List  from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';


import HeadingText from './HeadingText';
import { certifications } from '../utils/data';
import { useStyles } from '../utils/styles';

const Achievement = () => {
  const { list, listItem, listText, certList } = useStyles();
  return (
    <Box component="section" className="achievement" id="achievement">
      <Box component="article">
        <HeadingText text="Trainings and Certifications" />
        <Box className={certList}>
          <List className={list}>
            <hr />
            {certifications.map((certificate, index) => (
              <ListItem key={index} className={listItem}>
                <ListItemText
                  className={listText}
                  primary={certificate}
                  sx={{
                    [`& .MuiListitemText-primary`]: {
                      '&:hover': {
                        animation: 'bounce .3s ease 0s alternate',
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievement;
