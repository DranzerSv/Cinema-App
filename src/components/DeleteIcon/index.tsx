import { useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { getAccountInfo } from '@/apiRequests/loginRequests';
import { IAccountInfo } from '@/interfaces/loginInterfaces';
import { setFavorite } from '@/apiRequests/loginRequests';
import { toast } from 'react-hot-toast';
import Session from '@/components/Context';

interface IDeleteIcon {
  id: number;
  type: 'movie' | 'tv';
  setDisplay: Dispatch<SetStateAction<boolean>>;
}

function DeleteIcon({ id, type, setDisplay }: IDeleteIcon) {
  const { sessionValue } = useContext(Session);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const accountInfo: IAccountInfo = await getAccountInfo(sessionValue);
      await setFavorite(id, false, accountInfo.id, sessionValue, type);
      toast.success('Deleted from  favorites');
      setDisplay(false);
    } catch (error) {
      toast.error('Error deleting from favorites');
    }
  }
  return (
    <div className="absolute right-2 bottom-1">
      <button
        className="text-fire border-fire border-2 rounded-full w-7 hover:bg-fire hover:text-white  "
        onClick={handleClick}
      >
        X
      </button>
    </div>
  );
}

export default DeleteIcon;
