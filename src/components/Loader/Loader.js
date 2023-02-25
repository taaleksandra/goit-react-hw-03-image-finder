import { Component } from 'react';
import clsx from 'clsx';
import { RotatingLines } from 'react-loader-spinner';

import css from '../Loader/Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={clsx(css.Loader)}>
        <RotatingLines
          strokeColor="#e15b64"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }
}
