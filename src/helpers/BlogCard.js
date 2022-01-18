import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  card: {
    display: "flex",
    height: 210,
  },
  cardDetails: {
    textAlign: "left",
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item md={12}>
      <Link href={post.url} style={{ textDecoration: "none" }}>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <br />
                {/* <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography> */}
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                {/* <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
              </CardContent>
            </div>
            {/* <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden> */}
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
