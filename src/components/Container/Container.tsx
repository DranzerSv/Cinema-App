import Footer from '../Footer';
import Navigation from '../Navigation';

interface ContainerProps {
  children: React.ReactNode;
}
function Container(props: ContainerProps) {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Container;
