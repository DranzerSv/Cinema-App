import { getRequestToken } from '@/apiRequests/loginRequests';
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const login = async () => {
    try {
      const data = await getRequestToken();
      console.log(data.requestToken);
      router.push(
        `https://www.themoviedb.org/authenticate/${data.requestToken}?redirect_to=https://cinema-blond-mu.vercel.app/approved`
      );
    } catch (error) {}
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-smoke h-screen">
      <div className="flex flex-col items-center px-10 gap-10 w-4/5 2xl:w-4/12 text-justify font-lato">
        <p>
          In Order to accesss to your favorite list from your TMDB account, you
          have to click de Log in button and then you will be redirected to TMDB
          website to give us permission to read and write some data from your
          account. If you decide to give us access, you will be redirected to
          the home page an you will have access to the like feature.
        </p>
        <button className="bg-fire text-smoke w-20 h-14" onClick={login}>
          Give access
        </button>
      </div>
    </div>
  );
}

export default Login;
