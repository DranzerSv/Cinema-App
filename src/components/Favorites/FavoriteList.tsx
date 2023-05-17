import { ReactNode } from 'react';

interface IFavoriteListProps {
  children: React.ReactNode;
}

function FavoriteList({ children }: IFavoriteListProps) {
  return (
    <section
      className="mt-10 grid  gap-10 grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-600 
     "
    >
      {children}
    </section>
  );
}

export default FavoriteList;
