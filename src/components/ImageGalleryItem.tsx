interface IGalleryItem {
  onModal: (image: string) => void;
  id?: string;
  tags: string;
  largeImage: string;
  smallImage: string;
}

export const ImageGalleryItem: React.FC<IGalleryItem> = ({
  id,
  smallImage,
  tags,
  largeImage,
  onModal,
}) => (
  <li className="rounded-sm shadow-lg" key={id}>
    <img
      className="w-full h-64 object-cover ease-in-out duration-300 hover:cursor-pointer hover:scale-105"
      src={smallImage}
      alt={tags}
      onClick={() => {
        onModal(largeImage);
      }}
    />
  </li>
);
