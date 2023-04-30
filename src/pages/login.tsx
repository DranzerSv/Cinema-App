import { getRequestToken } from '@/apiRequests/loginRequests';
import { useRouter } from 'next/router';
function Login() {
  const router = useRouter();
  const login = async () => {
    try {
      const data = await getRequestToken();
      console.log(data.requestToken);
      router.push(
        `https://www.themoviedb.org/authenticate/${data.requestToken}?redirect_to=http://localhost:3000/approved`
      );
    } catch (error) {}
  };
  return (
    <div>
      <button className="bg-fire text-smoke" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;
