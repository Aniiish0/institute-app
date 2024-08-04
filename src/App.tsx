import ContactForm from './components/widgets/ContactForm'
import FAQ from './components/widgets/FAQs'
import HomePage from './components/HomePage'
import HomeNavbar from './components/Navbar'

function App() {
  return (
    <div className='container-fluid'>
      <HomeNavbar />
      <HomePage />

      <FAQ />
      <ContactForm />
    </div>
  )
}

export default App
