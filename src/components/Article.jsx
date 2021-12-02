import React from "react";
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, CardActions } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../utils/styles";

import laptopImg from "../images/laptop&code.jpg";
import { articles } from "../utils/data";
import HeadingText from "./HeadingText";

const Article = () => {
  const {
    card,
    cardMedia,
    rightBorder,
    cardContent,
    title,
    intro,
    articleBtn,
  } = useStyles();
  return (
    <Box component="section" className="article-section" id="article">
      <Box component="article">
        <HeadingText text="Articles" />
        <Box className="cards__box">
          {articles.map((article) => {
            article.coverImg = laptopImg;
            return (
              <Card key={article.id} sx={{ maxWidth: 345 }} className={card}>
                <CardMedia
                  className={cardMedia}
                  component="img"
                  height="100"
                  image={article.coverImg}
                  alt="Random image"
                />
                <div className={rightBorder} />
                <CardContent className={cardContent}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    className={title}
                    component="div"
                  >
                    {article.title}
                  </Typography>
                  <Typography variant="body2" className={intro}>
                    {article.intro}
                  </Typography>
                  <CardActions>
                    <Button
                      sx={{ marginLeft: "auto" }}
                      size="small"
                      color="primary"
                      href={article.previewLink}
                      target="new"
                      className={articleBtn}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
