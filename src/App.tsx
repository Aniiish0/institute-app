import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQs";
import HomePage from "./components/HomePage";
import {
  Navbar,
  type NavbarItem,
  type NavbarProps,
} from "@proto-xyz/ui-components";
import Highlight1 from "./components/Highlight1";
import Highlight2 from "./components/Highlight2";

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
    logoRedirectionUrl: "/institute-app",
    items: navbarItems,
    cornerButton: {
      label: "Brochure",
      bsIcon: "bi-download",
      redirectionUrl: getBrochureUrl(),
    },
  };
  return (
    <div>
      <Navbar {...navbarProps} />
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
