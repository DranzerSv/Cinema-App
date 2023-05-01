import { useContext } from 'react';
import { getAccountInfo } from '@/apiRequests/loginRequests';
import { IAccountInfo } from '@/interfaces/loginInterfaces';
import { setFavorite } from '@/apiRequests/loginRequests';
import { toast } from 'react-hot-toast';
import Session from '@/components/Context';
import Link from 'next/link';

interface IHeartProps {
  id: number;
  type: 'movie' | 'tv';
}

function HeartButton({ id, type }: IHeartProps) {
  const { sessionValue } = useContext(Session);

  async function handleClick() {
    try {
      const accountInfo: IAccountInfo = await getAccountInfo(sessionValue);
      await setFavorite(id, true, accountInfo.id, sessionValue, type);
      toast.success('Added to favorites');
    } catch (error) {
      toast.error('Error adding to favorites');
    }
  }
  return (
    <div>
      {sessionValue ? (
        <button
          className="bg-crimson w-24 text-smoke hover:bg-fire"
          onClick={handleClick}
        >
          Add to favorites
        </button>
      ) : (
        <Link href="/login">
          <p className="bg-steel text-white p-2 w-32 hover:bg-gray-400 ">
            Log in to add to favorites
          </p>
        </Link>
      )}
    </div>
  );
}

export default HeartButton;
