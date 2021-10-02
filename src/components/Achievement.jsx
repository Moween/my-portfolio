import React from 'react'
import HeadingText from './HeadingText';
import { certifications } from '../data';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  section: {
    backgroundColor: '#212121',  
    width: '100vw',
    marginLeft: 'calc(50% - 50vw)',
  },
  list: {
    width: '70%',
    margin: 'auto',
  },
  listItem: {
    padding: '1rem',
    borderBottom: '1px solid #fff',
    color: '#ffffff'
  },
}))

const Achievement = () => {
  const { section, list, listItem } = useStyles();
  return (
    <section className={`achievement ${section}`} id="achievement">
      <article>
        <HeadingText text="Trainings and Certifications" />
        <div>
          <ul className={list}>
            {certifications.map((certificate, index) => {
                return (
                  <li key={index}>
                    <Typography className={listItem}>{certificate}</Typography>
                  </li>
                );
            })
            }           
          </ul>
        </div>
      </article>
      
    </section>
    
  )
}

export default Achievement;
