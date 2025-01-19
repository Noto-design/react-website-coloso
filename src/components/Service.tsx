import { motion } from "framer-motion";
import { services } from "../data/service";
import SectionLayout from "./layouts/SectionLayout";

const Service = () => {
    
    return (
        <SectionLayout
        id={"service"}
        title={"Service"}
        description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cumque officia, vero suscipit reiciendis similique laboriosam illo tempore architecto esse vel, quo natus veritatis accusantium magnam qui fugiat odio nisi."
            }
        >
            {/* service card */}
            {({ isInView }) => (
            <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 20}}
            transition={{
                duration:0.5,
                delay:0.6,
            }}
            >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8">
                    {services.map((service, index) => (
                        <motion.div
                        key={index}
                        initial={{opacity:0, y:20}}
                        animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 20}}
                        transition={{
                            duration:0.5,
                            delay: index * 0.2,
                        }}
                        className="bg-slate-50 shadow px-6 py-4 rounded-md space-3">
                        <img src={service.url} alt={service.alt} width={120} height={100} className="mx-auto" />
                        <span className="font-semibold text-2xl">{service.title}</span>
                        <p>{service.content}</p>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
            )}
    
                </SectionLayout>
      )
    }

export default Service