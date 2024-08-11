import ContactForm from "./components/widgets/ContactForm";
import FAQ from "./components/widgets/FAQs";
import HomePage from "./components/HomePage";
import HomeNavbar from "./components/Navbar";
import Highlight1 from "./components/widgets/Highlight1";
import Highlight2 from "./components/widgets/Highlight2";

function App() {
  return (
    <div>
      <HomeNavbar />
      <div className="container-fluid">
        <section id="home">
          <HomePage />
        </section>
        <section id="events">
          <Highlight1 />
          <Highlight2 />
        </section>
        <section>
          <FAQ />
        </section>
        <section id="contact-us">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default App;
