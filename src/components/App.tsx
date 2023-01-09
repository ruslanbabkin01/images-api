import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import {
  ImageGallery,
  Searchbar,
  Modal,
  Loader,
  Notification,
  Button,
} from './index';
import { fetchImages } from 'api/pixabayAPI';
import { IImages } from 'types/types';
import { AxiosError } from 'axios';
import { useModal } from 'context/useModalContext';

export const App: React.FC = () => {
  const [images, setImages] = useState<IImages[]>([]);
  const [query, setQuery] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const calcImages: number = totalImages - page * 12;

  const { largeImage, closeModal } = useModal();

  const handleFormSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    if (!query) return;

    setStatus('pending');
    async function getImages(query: string, page: number) {
      try {
        const data = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.totalHits);
        setStatus('resolved');

        if (page === 1 && data.hits.length > 0) {
          toast.success(`We find ${data.totalHits} images`, {
            autoClose: 1500,
            theme: 'colored',
          });
        }

        if (data.hits.length === 0) {
          setStatus('empty');
          setImages([]);
          return;
        }

        if (page === 1) {
          setImages(data.hits);
          return;
        }
      } catch (e: unknown) {
        setStatus('error');
        const error = e as AxiosError;
        console.log(error.message);
      }
    }
    getImages(query, page);
  }, [page, query]);

  return (
    <div className="mx-auto flex flex-col gap-4">
      <Searchbar onSubmit={handleFormSubmit} />

      <ImageGallery images={images} />

      {status === 'pending' && totalImages === 0 && <Loader />}

      {status === 'idle' && (
        <Notification message="Please find the image" status={status} />
      )}

      {status === 'empty' && (
        <Notification
          message="We didn't find anything, try to enter the correct query"
          status={status}
        />
      )}

      {status === 'error' && (
        <Notification
          message="Whoops, something went wrong, try again"
          status={status}
        />
      )}

      {calcImages > 0 && images.length > 0 && (
        <Button onLoadMore={onLoadMore} status={status} />
      )}

      {largeImage && (
        <Modal onClose={closeModal}>
          <img src={largeImage} alt="IMG" />
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
};
