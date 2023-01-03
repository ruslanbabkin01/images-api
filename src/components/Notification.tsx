import path from '../images/pic.jpg';

interface INotificationProps {
  message: string;
  status: string;
}

export const Notification: React.FC<INotificationProps> = ({
  message,
  status,
}) => (
  <div className="mx-auto">
    {status === 'idle' && <img className="mx-auto" src={path} alt="#" />}
    {status === 'empty' && <p>{message}</p>}
    {status === 'error' && <p>{message}</p>}
  </div>
);
