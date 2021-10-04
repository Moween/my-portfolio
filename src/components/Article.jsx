import React from 'react'
import { articles } from '../data';
import HeadingText from './HeadingText';
import laptopImg from '../images/laptop&code.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button, CardActions } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: '0.3rem',
    boxShadow: '1px 2px 3px rgb(50, 50, 50)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.5rem',
    height: '150px',
    justifyContent: 'space-between',
    padding: '1rem 0.321rem',
    position: 'relative',
    width: '45%'
  },
  cardMedia: {
    width: '35%',
  },
  rightBorder: {
    borderRight: '4px solid #fff',
    height: 100,
    margin: 2,
    opacity: 0.5,
    width: '5%',
  },
  cardContent: {
    width: '40%',
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 'bold'
  },
  intro: {
    textAlign: 'justify',
    padding: '0.25rem',
    fontSize: '0.75rem'
  },
  btn: {
    bottom: '5%',
    position: 'absolute',
    right: '5%',
  }
}));

const Article = () => {
  const { card, cardMedia, rightBorder, cardContent, title, intro, btn } = useStyles();
  return (
    <section className="article-section" id="article">
      <article>
        <HeadingText text="Articles" />
        <div className="cards__box">
          {articles.map((article) => {
            article.coverImg = laptopImg;
            return (
              <Card
                key={article.id} 
                sx={{ maxWidth: 345 }}
                className={card}
              >
                <CardMedia
                  className={cardMedia}
                  component="img"
                  height="100"
                  image={article.coverImg}
                  alt="Random image"
                />
                <div className={rightBorder} />
                <CardContent classname={cardContent}>
                  <Typography gutterBottom variant="h6" className={title} component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" className={intro}>
                    {article.intro}
                  </Typography>
                  <CardActions>
                    <Button
                      sx={{ marginLeft: 'auto' }} 
                      size="small"
                      color="primary"
                      href={article.previewLink}
                      target="new"
                      className={btn}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            );
            }
          )}
        </div>
      </article>
    </section>
  )
}

export default Article;
