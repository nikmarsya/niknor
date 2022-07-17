import Landing from "./components/Landing";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { motion } from "framer-motion"


function App() {
  return (
    <motion.section 
      initial={{x:-window.innerWidth}}
      animate={{x:0}}
      exit={{x:-window.innerWidth}}
    transition={{type:"tween",duration:0.5}}
    >    
    <Header/>
    <Landing />
    <About />
    <Contact />
    </motion.section>

  )    
}

export default App;
