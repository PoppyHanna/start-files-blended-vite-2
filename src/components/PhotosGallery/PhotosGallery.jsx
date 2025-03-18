// import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';
// import styles from './PhotosGallery.module.css';

// const PhotosGallery = ({ images }) => {
//   return (
//     <div className={styles.grid}>
//       {images.map(image => (
//         <div key={image.id} className={styles.gridItem}>
//           <PhotosGalleryItem
//             src={image.src}
//             alt={image.alt}
//             avgColor={image.avg_color}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default PhotosGallery;

// import styles from './PhotosGallery.module.css';

import { Grid } from 'react-loader-spinner';

import { GridItem } from 'react-loader-spinner';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <GridItem key={image.id}>
          <PhotosGalleryItem
            src={image.src}
            alt={image.alt}
            avgColor={image.avg_color}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PhotosGallery;
