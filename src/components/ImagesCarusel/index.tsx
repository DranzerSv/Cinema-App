import { Images, IBackdrop } from '@/interfaces/movieInterface';
import dynamic from 'next/dynamic';
import 'react-alice-carousel/lib/alice-carousel.css';

import Image from 'next/image';

interface ImagesCaruselProps {
  images: Images;
}
export default function ImagesCarusel({ images }: ImagesCaruselProps) {
  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 2 },
  };
  const AliceCarousel = dynamic(() => import('react-alice-carousel'), {
    ssr: false,
  });
  return (
    <div className=" w-64 md:w-4/5 mx-auto ">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        items={images.backdrops
          .slice(0, 10)
          .map((backdrop: IBackdrop, index: number) => (
            <Image
              src={`https://image.tmdb.org/t/p/w780${backdrop.filePath}`}
              alt="Description"
              width={600}
              height={400}
            />
          ))}
      />
    </div>
  );
}
