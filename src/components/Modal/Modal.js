import React, { Component } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  render() {
    const { modalImg, onModalClick } = this.props;
    return (
      <div onClick={onModalClick} className={clsx(css.Overlay)}>
        <div className={clsx(css.Modal)}>
          <img src={modalImg.largeImageURL} alt={modalImg.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.object,
};
