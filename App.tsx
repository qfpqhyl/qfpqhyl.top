import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main className="px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
          <Hero />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
