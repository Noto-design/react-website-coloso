import Lottie from "lottie-react"
import aboutAnimation from "../assets/animations/aboutAnimation.json";
import { motion } from "framer-motion";
import SectionLayout from "./layouts/SectionLayout";


const About = () => {

  return (
    <SectionLayout
    id={"about"}
    title={"About Us"}
    description={
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore dicta velit fuga cupiditate, saepe necessitatibus molestias dolorem voluptatem aperiam in tempora exercitationem illo veniam animi ea ratione sapiente esse!"
        }
    >
        {({ isInView }) => (
                        <motion.div
                        initial={{opacity:0, y:20}}
                        animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 20}}
                        transition={{
                            duration:0.5,
                            delay:0.6,
                        }}
                         className="py-2">
                        <Lottie animationData={aboutAnimation} />
                        </motion.div>
        )}

            </SectionLayout>
  )
}

export default About