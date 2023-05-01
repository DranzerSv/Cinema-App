import Head from 'next/head';
import Footer from '../Footer';
import Navigation from '../Navigation';

interface ContainerProps {
  children: React.ReactNode;
}
function Container(props: ContainerProps) {
  return (
    <div>
      <Navigation />
      <Head>
        <title>Cinema</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Container;
