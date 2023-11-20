import Header from '../Components/Header';
import Presentation from '../Components/Presentation';

export default function Initial() {
  return (
    <div>
      <Header />
      <section className="max-md:mx-0 max-md:min-h-screen flex justify-center">
        <Presentation />
      </section>
    </div>
  );
}
