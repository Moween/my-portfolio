import React from 'react'
import HeadingText from './HeadingText';
import { certifications } from '../data';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  certList: {
    marginTop: '4rem',
  },
  list: {
    width: '70%',
    margin: 'auto',
  },
  listItem:  {
    borderBottom:  '1px solid #fff', 
  },
  listText: {
    padding: '1rem',
    color: '#ffffff',
    '&:hover': {
      animation: 'bounce .3s ease 0s alternate',      
    },
  },
}))

const Achievement = () => {
  const { list, listItem, listText, certList } = useStyles();
  return (
    <section className="achievement" id="achievement">
      <article>
        <HeadingText text="Trainings and Certifications" />
        <div className={certList}>
          <ul className={list}>
            <hr />
            {certifications.map((certificate, index) => (
              <li key={index} className={listItem}>
                <Typography variant="body1" 
                  component="p" 
                  className={listText}
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
