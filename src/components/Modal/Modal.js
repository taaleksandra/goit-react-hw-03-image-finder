import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  render() {
    const { modalImg } = this.props;
    return (
      <div className={clsx(css.Overlay)}>
        <div className={clsx(css.Modal)}>
          <img src={modalImg.largeImageURL} alt={image.tags} />
        </div>
      </div>
    );
  }
}
