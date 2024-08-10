import ContactForm from "./components/widgets/ContactForm";
import FAQ from "./components/widgets/FAQs";
import HomePage from "./components/HomePage";
import HomeNavbar from "./components/Navbar";
import Highlight1 from "./components/widgets/Highlight1";

function App() {
  return (
    <div className="container-fluid">
      <HomeNavbar />
      <br />
      <HomePage />
      <br />
      <Highlight1 />
      <br />
      <FAQ />
      <br />
      <ContactForm />
      <br />
    </div>
  );
}

export default App;
