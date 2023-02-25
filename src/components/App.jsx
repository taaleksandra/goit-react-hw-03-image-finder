import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { fetchImg } from './PixabayApi/FetchImg';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    pageNumber: 1,
    isLoading: false,
  };

  handleFetchImg = async searchQuery => {
    this.setState({ isLoading: true, pageNumber: 1 });

    try {
      const images = await fetchImg(searchQuery, this.state.pageNumber);
      this.setState({ images, searchQuery });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState(prev => {
        return { pageNumber: prev.pageNumber + 1, isLoading: false };
      });
    }
  };

  handlePag = async () => {
    this.setState({ isLoading: true });

    try {
      const nextImages = await fetchImg(
        this.state.searchQuery,
        this.state.pageNumber
      );
      this.setState(prev => {
        return {
          images: [...prev.images, ...nextImages],
        };
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState(prev => {
        return { pageNumber: prev.pageNumber + 1, isLoading: false };
      });
    }
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={clsx(css.App)}>
        <Searchbar onSubmit={this.handleFetchImg} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.handlePag} />}
      </div>
    );
  }
}
