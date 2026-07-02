import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Extracurricular } from './components/Extracurricular'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Header />
        <About />
        <Experience />
        <Education />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
