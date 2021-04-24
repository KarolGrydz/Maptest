import React from 'react';
import propTypes from 'prop-types';
import { SRLWrapper } from 'simple-react-lightbox';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import Preloader from './Preloader';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10vh 0',
  },

  gallery: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto auto',
      gridRowGap: theme.spacing(1),
    },
  },

  galleryItem: {
    textAlign: 'center',
  },
}));

const options = {
  buttons: {
    showDownloadButton: false,
  },
  settings: {
    transitionSpeed: 1000,
    transitionTimingFunction: 'linear',
  },
  thumbnails: {
    thumbnailsSize: ['120px', '100px'],
    thumbnailsOpacity: 0.4,
  },

  progressBar: {
    size: '4px',
  },
};

const BlogSingleGallery = ({ gallery }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {gallery === undefined || gallery === null ? (
        <Preloader />
      ) : (
        <Grid container>
          <Grid item xs={9}>
            <SRLWrapper options={options}>
              <div className={classes.gallery}>
                {gallery.map((image) => (
                  <div key={image.id} className={classes.galleryItem}>
                    <a href={image.media_details.sizes.full.source_url}>
                      <img
                        src={image.media_details.sizes.thumbnail.source_url}
                        alt={image.title.rendered}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

BlogSingleGallery.propTypes = {
  gallery: propTypes.array.isRequired,
};

export default BlogSingleGallery;
