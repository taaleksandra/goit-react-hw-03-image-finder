import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { fetchImg } from './PixabayApi/FetchImg';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    pageNumber: 1,
    isLoading: false,
    modalImg: '',
    idModalOpen: false,
  };

  handleFetchImg = async searchQuery => {
    this.setState({ isLoading: true, pageNumber: 1 });

    try {
      const images = await fetchImg(searchQuery, 1);
      this.setState({ images, searchQuery });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState(prev => {
        return { pageNumber: prev.pageNumber + 1, isLoading: false };
      });
    }
  };

  handleLoadMore = async () => {
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

  handleModalOpen = evt => {
    const modalImgId = evt.currentTarget.id;
    const images = this.state.images;

    const modalImg = images.find(image => image.id === Number(modalImgId));

    this.setState({ isModalOpen: true, modalImg });
  };

  handleModalClose = evt => {
    if (evt.target.tagName.toLowerCase() !== 'img') {
      this.setState({ isModalOpen: false });
    }
    // this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, isModalOpen, modalImg } = this.state;
    return (
      <div className={clsx(css.App)}>
        <Searchbar onSubmit={this.handleFetchImg} />
        {isModalOpen && (
          <Modal modalImg={modalImg} onModalClick={this.handleModalClose} />
        )}
        <ImageGallery>
          <ImageGalleryItem images={images} onImgClick={this.handleModalOpen} />
        </ImageGallery>
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
