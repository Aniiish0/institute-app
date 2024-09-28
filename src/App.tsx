import ContactForm from "./components/widgets/ContactForm";
import FAQ from "./components/widgets/FAQs";
import HomePage from "./components/HomePage";
import HomeNavbar from "./components/Navbar";
import Highlight1 from "./components/widgets/Highlight1";
import Highlight2 from "./components/widgets/Highlight2";
import { type NavbarItem, NavbarProps } from "./components/Navbar/types";

import { getBrochureUrl } from "./helpers/utility";

function App() {
  const navbarItems: NavbarItem[] = [
    { label: "Home", redirectionUrl: "#home", sectionId: "home" },
    {
      label: "Contact us",
      redirectionUrl: "#contact-us",
      sectionId: "contact-us",
    },
    { label: "Events", redirectionUrl: "#events", sectionId: "events" },
    {
      label: "Class",
      dropdown: [
        { label: "LKG", redirectionUrl: "https://google.com" },
        { label: "UKG", redirectionUrl: "#ukg" },
        { label: "Class 1", redirectionUrl: "#class1" },
      ],
    },
  ];

  const navbarProps: NavbarProps = {
    logo: "xyz.jpeg",
    logoRedirectionUrl: "/",
    items: navbarItems,
    cornerButton: {
      label: "Brochure",
      bsIcon: "bi-download",
      redirectionUrl: getBrochureUrl(),
    },
  };
  return (
    <div>
      <HomeNavbar {...navbarProps} />
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
