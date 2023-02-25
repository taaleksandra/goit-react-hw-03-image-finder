import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        {images.map(image => (
          <li key={image.id} className={clsx(css.ImageGalleryItem)}>
            <img
              className={clsx(css.ImageGalleryItemImage)}
              src={image.webformatURL}
              alt={image.tags}
            />
          </li>
        ))}
      </>
    );
  }
}
