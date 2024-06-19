import Main from '@/components/main';
import About from '@/components/about';
import Footer from '@/components/footer';
import Blue from '@/components/blue';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Main />
        <About />
        <Blue />
        <Footer />
      </div>
    </div>
  );
}

export default App;
