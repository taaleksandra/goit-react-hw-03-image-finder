import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={clsx(css.ImageGallery)}>{children}</ul>;
  }
}
