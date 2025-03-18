import styles from './PhotosGalleryItem.module.css';
const PhotosGalleryItem = ({ src, alt, avgColor }) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avgColor, borderColor: avgColor }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;
