import { motion } from "framer-motion"

const Animation = ({children})=>{

    return (
        <motion.section
        initial={{x:window.innerWidth}}
        animate={{x:0}}
       
        transition={{duration:"0.5",delay:'0.5'}}
    
        >
            {children}
        </motion.section>
    )

}
export default Animation