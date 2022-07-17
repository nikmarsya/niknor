import { Routes,Route, useLocation } from 'react-router-dom';
import App from './App';
import Publications from "./components/Publications";
import Researches from "./components/Researches";
import Profile from "./components/Profile";
import Collaborations from "./components/Collaborations";
import Supervisions from "./components/Supervisions";
import DataUpdate from './components/DataUpdate';
import { AnimatePresence } from 'framer-motion';




const AnimatedRoute = () =>{
    const location =useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<App />} />
        <Route path="publications" element={<Publications />} />
        <Route path="researches" element={<Researches />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collaborations" element={<Collaborations />} />
        <Route path="supervisions" element={<Supervisions />} />
        <Route path="contact" element={<App />} />
        <Route path="update" element={<DataUpdate />} />
       
        </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoute