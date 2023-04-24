import Slider from 'react-slick';
import { Images, IBackdrop } from '@/interfaces/movieInterface';

interface ImagesCaruselProps {
  images: Images;
}
export default function ImagesCarusel({ images }: ImagesCaruselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-10/12 2xl:w-6/12 mx-auto">
      <Slider {...settings}>
        {images.backdrops
          .slice(0, 6)
          .map((backdrop: IBackdrop, index: number) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w780${backdrop.filePath}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
