import { IReviews } from '@/interfaces/movieInterface';
interface IUsersReviewsProps {
  reviews: IReviews;
}
export default function UsersReviews({ reviews }: IUsersReviewsProps) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="font-bold font-oswald text-crimson mb-10 text-xl md:text-3xl">
        Reviews
      </h2>
      {reviews.results.map((review, index) => (
        <div
          key={index}
          className="border-fire border-2 w-10/12 mb-10 p-2 md:p-10 2xl:p-20"
        >
          <div className="flex gap-2 mb-10 font-lato flex-wrap">
            <p>
              <span className="font-semibold font-oswald">Author: </span>
              {review.author}
            </p>
            <p>
              <span className="font-semibold font-oswald">Rate: </span>
              {review.authorDetails.rating}
            </p>
            <p>
              <span className="font-semibold font-oswald">Date: </span>
              {review.createdAt.slice(0, 10)}
            </p>
          </div>

          <p className="overflow-hidden font-lato">{review.content}</p>
        </div>
      ))}
    </div>
  );
}
