import React, { Component } from 'react';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

import css from '../Button/Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} className={clsx(css.Button)}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
