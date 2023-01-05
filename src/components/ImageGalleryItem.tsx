import { useModal } from 'context/useModalContext';

interface IGalleryItem {
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
}) => {
  const { openModal } = useModal();

  return (
    <li className="shadow-md w-[(calc(100%-2rem))/4]" key={id}>
      <img
        className="w-full h-64 object-cover ease-in-out duration-300 hover:cursor-pointer hover:scale-105"
        src={smallImage}
        alt={tags}
        onClick={() => openModal(largeImage)}
      />
    </li>
  );
};
