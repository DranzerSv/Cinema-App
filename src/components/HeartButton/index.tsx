import { useContext, useEffect } from 'react';
import { getAccountInfo } from '@/apiRequests/loginRequests';
import { IAccountInfo } from '@/interfaces/loginInterfaces';
import { setFavorite, getFavorites } from '@/apiRequests/loginRequests';
import Session from '@/components/Context';
import Link from 'next/link';

interface IHeartProps {
  id: number;
  type: 'movie' | 'tv';
}

function HeartButton({ id, type }: IHeartProps) {
  const { sessionValue } = useContext(Session);

  async function handleClick() {
    const accountInfo: IAccountInfo = await getAccountInfo(sessionValue);
    setFavorite(id, true, accountInfo.id, sessionValue, type);
  }
  return (
    <div>
      {sessionValue ? (
        <button className="bg-pink-500 w-16 text-smoke" onClick={handleClick}>
          Like
        </button>
      ) : (
        <Link href="/login">
          <p className="bg-crimson text-white p-2 w-32">
            Log in to mark as favorite
          </p>
        </Link>
      )}
    </div>
  );
}

export default HeartButton;
