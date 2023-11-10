import Header from '../Components/Header';
import Presentation from '../Components/Presentation';

export default function Initial() {
  return (
    <div>
      <Header />
      <section className="container ml-12 max-md:mx-0 max-md:min-h-screen h-screen w-screen justify-center">
        <Presentation />
      </section>
    </div>
  );
}
