import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
export default function Lyout({children}) {
    return (
      <div>
      <nav>
        <Navbar/>
      </nav>
      <Hero/>
      <main>
      {children}
      </main>

      <footer>
        Created by Renu Tayde
      </footer>
        
      </div>
    )
  }