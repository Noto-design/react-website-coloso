import Lottie from "lottie-react"
import outMissionAnimation from "../assets/animations/outMissionAnimation.json";
import { motion } from "framer-motion";
import SectionLayout from "./layouts/SectionLayout"
import { mission } from "../data/missions";

const OurMission = () => {
  return (
    <SectionLayout
    id="ourmission"
    title="Our Mission"
    description={
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cumque officia, vero suscipit reiciendis similique laboriosam illo tempore architecto esse vel, quo natus veritatis accusantium magnam qui fugiat odio nisi."
    }
    >
        {({ isInView }) => (
            <div>
            <div className="md:flex md:gap-5">
                {/* Left side */}
                <motion.div
                initial={{opacity:0, x:-150}}
                animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : -150}}
                transition={{
                    duration:0.7,
                    delay:0.5,
                }}
                className="md:w-1/2">
                    <Lottie animationData={outMissionAnimation} />
                </motion.div>
                {/* Right side */}
                <div className="space-y-20 md:w-1/2">
                    {mission.map((mission, index) => (
                        <motion.div
                        key={index}
                        initial={{opacity:0, x:150}}
                animate={{opacity: isInView ? 1 : 0, x: isInView ? 0 : 150}}
                transition={{
                    duration:0.7,
                    delay:index * 0.3,
                }}
                        className="text-left border-b-2 border-slate-500 pb-2">
                            <h4 className="font-medium md:text-2xl text-xl mb-2">{mission.title}</h4>
                            <p className="lg:text-xl text-base">{mission.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            </div>
        )}
    </SectionLayout>
  )
}

export default OurMission