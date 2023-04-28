import { useRouter } from 'next/router';
import Link from 'next/link';
function Navigation() {
  const router = useRouter();
  return (
    <nav className="bg-blue-200">
      <ul className="flex gap-5 pl-4 md:pl-8 2xl:pl-16 items-center bg-steel h-12 font-lato">
        <li>
          <Link
            href="/"
            className={
              router.pathname === '/'
                ? 'border-crimson border-b-2 pb-1 text-smoke'
                : 'text-smoke'
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className={
              router.pathname === '/search'
                ? 'border-crimson border-b-2 pb-1 text-smoke'
                : 'text-smoke'
            }
          >
            Search by Title
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
