import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}