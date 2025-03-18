// import { useState } from 'react';
// import Form from '../components/Form/Form';
// import Text from '../components/Text/Text';
// import PhotosGallery from '../components/PhotosGallery/PhotosGallery';

// const images = [
//   {
//     id: 3573351,
//     avg_color: '#374824',
//     src: {
//       large:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
//     },
//     alt: 'Brown Rocks During Golden Hour',
//   },
//   {
//     id: 35733515,
//     avg_color: '#374824',
//     src: {
//       large:
//         'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
//     },
//     alt: 'Brown Rocks During Golden Hour',
//   },
// ];

// const Photos = () => {
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState('1');

//   const getQuery = inputValue => {
//     setQuery(inputValue);
//   };

//   return (
//     <>
//       <Form onSubmit={getQuery} />
//       <Text textAlign="center">Let`s begin search!!! </Text>
//       <PhotosGallery images={images} />
//     </>
//   );
// };

// export default Photos;

import { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';

import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { getPhotos } from '../apiService/photos';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const newImages = await getPhotos(query, page);
        setImages(prevImages => [...prevImages, ...newImages]);
      } catch (err) {
        setError('Something went wrong! Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Form onSubmit={handleSearch} />
      <Text textAlign="center">Let’s begin search!</Text>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      <PhotosGallery images={images} />
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMore}>Load More</Button>
      )}
    </>
  );
};

export default Photos;
