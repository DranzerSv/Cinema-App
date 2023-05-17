import Link from 'next/link';
import Image from 'next/image';
import cardDefault from '@/assets/cardDefault.png';
import { VscTrash } from 'react-icons/vsc';
import DeleteIcon from '../DeleteIcon';
import { useState } from 'react';

interface IFavoriteCard {
  resourceType: 'movie' | 'tv';
  resourceId: number;
  resourceName: string;
  imagePath: string | undefined;
}
function FavoriteCard({
  resourceType,
  resourceId,
  resourceName,
  imagePath,
}: IFavoriteCard) {
  const [display, setDisplay] = useState<boolean>(true);
  return (
    <div className={display ? '' : 'hidden'}>
      <Link
        href={`/${resourceType}/${resourceId}`}
        key={resourceId}
        className=" mb-14"
      >
        <div className="border-2 border-steel p-2 flex items-center relative w-80 ">
          <Image
            src={
              imagePath
                ? `https://image.tmdb.org/t/p/w500${imagePath}`
                : cardDefault
            }
            width={100}
            height={120}
            alt={`${resourceName} photo`}
          />
          <div className="  flex items-center h-16 ml-4">
            <h3 className="font-oswald text-crimson font-semibold text-600 text-xl">
              {resourceName}
            </h3>
          </div>
          <DeleteIcon
            id={resourceId}
            type={resourceType}
            setDisplay={setDisplay}
          />
        </div>
      </Link>
    </div>
  );
}

export default FavoriteCard;
