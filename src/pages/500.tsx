import droppedPopCorn from '@/assets/droppedPopCorn.png';
import Image from 'next/image';
export default function Custom500() {
  return (
    <div className="flex flex-col  gap-20 justify-center items-center h-screen ">
      <p className="font-oswald text-crimson text-3xl md:text-5xl lg:text-6xl">
        500 Server error
      </p>
      <Image
        src={droppedPopCorn}
        width={500}
        height={700}
        alt={'Dropped poprcorn photo'}
      />
    </div>
  );
}
