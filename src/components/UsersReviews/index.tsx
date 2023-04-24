import { IReviews } from '@/interfaces/movieInterface';
interface IUsersReviewsProps {
  reviews: IReviews;
}
export default function UsersReviews({ reviews }: IUsersReviewsProps) {
  return (
    <div>
      <h2 className="font-bold">Reviews</h2>
      {reviews.results.map((review, index) => (
        <div key={index}>
          <p>author:{review.author}</p>
          <p>rate:{review.authorDetails.rating}</p>
        </div>
      ))}
    </div>
  );
}
