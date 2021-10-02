import React from 'react'
import HeadingText from './HeadingText';
import { certifications } from '../data';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  list: {
    width: '70%',
    margin: 'auto',
  },
  listItem: {
    padding: '1rem',
    // borderBottom: '1px solid #fff',
    color: '#ffffff',
    '&:hover': {
      animation: 'bounce 0.5s alternate 1s',
      
    },
  },
}))

const Achievement = () => {
  const { list, listItem } = useStyles();
  return (
    <section className="achievement" id="achievement">
      <article>
        <HeadingText text="Trainings and Certifications" />
        <div>
          <ul className={list}>
            {certifications.map((certificate, index) => (
              <li key={index}>
                <Typography variant="body1" 
                  component="p" 
                  className={listItem}
                >
                  {certificate}
                </Typography>
              </li>
              ))
          }           
          </ul>
        </div>
      </article>
      
    </section>
    
  )
}

export default Achievement;
