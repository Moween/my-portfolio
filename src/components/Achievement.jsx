import React from 'react'
import HeadingText from './HeadingText';
import Typography from '@material-ui/core/Typography';
import { certifications } from '../utils/data';
import { useStyles } from "../utils/styles";

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
