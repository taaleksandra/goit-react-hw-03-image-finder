import React, { Component } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { images, onImgClick } = this.props;
    return (
      <>
        {images.map(image => (
          <li key={image.id} className={clsx(css.ImageGalleryItem)}>
            <img
              id={image.id}
              onClick={onImgClick}
              className={clsx(css.ImageGalleryItemImage)}
              src={image.webformatURL}
              alt={image.tags}
              // data-largeimg={image.largeImageURL}
            />
          </li>
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
