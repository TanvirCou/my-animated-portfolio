import { ToastContainer } from "react-toastify"
import Contact from "./components/Contact/Contact"
import Cursor from "./components/Cursor/Cursor"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from "./components/Skill/Skills"

function App() {

  return (
    <div>
      <Cursor />
      <section className="h-screen snap-center" id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center">
        <Parallax type="skill" />
      </section>
      <section className="h-screen snap-center" id="Skill">
        <Skills />
      </section>
      <section className="h-screen snap-center">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section className="h-screen snap-center" id="Contact">
        <Contact />
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
