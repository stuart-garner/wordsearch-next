import { motion } from "framer-motion";

type PropType = {
  children: React.ReactNode;
};

const Popup = ({ children }: PropType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        repeat: 0,
        duration: 0.5,
      }}
      id="contact-form"
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          repeat: 0,
          duration: 0.5,
          delay: 0.5,
        }}
        className="py-10 px-20 bg-white shadow-xl rounded-lg"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Popup;
