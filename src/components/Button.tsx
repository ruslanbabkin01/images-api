import { Loader } from 'components/Loader';

interface IButtonProps {
  onLoadMore: () => void;
  status: string;
}

export const Button: React.FC<IButtonProps> = ({ onLoadMore, status }) => (
  <>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <button
        className="py-2 px-4 rounded-sm bg-sky-700 text-center transition-all ease-in-out inline-block text-white border-0 cursor-pointer no-underline text-lg leading-6 not-italic font-medium min-w-full shadow-xl hover:bg-sky-900 focus:bg-sky-900"
        onClick={onLoadMore}
      >
        Load more
      </button>
    )}
  </>
);
