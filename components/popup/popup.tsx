import { motion } from "framer-motion";
import Confetti from "react-confetti";

type PropType = {
  width: number;
  height: number;
  onRestart: () => void;
};

const Popup = ({ width, height, onRestart }: PropType) => {
  return (
    <>
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
        <Confetti width={width} height={height} />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            repeat: 0,
            duration: 0.5,
            delay: 0.5,
          }}
          className="flex flex-col justify-center items-center gap-5 bg-white py-10 px-20 rounded-xl shadow-xl z-[999]"
        >
          <h2 className="m-0">Congratulations!</h2>
          <div>
            <p className="text-center">You have found all the words.</p>
            <p className="text-center">Click below to start a new challenge.</p>
          </div>
          <button className="button" onClick={onRestart}>
            Restart
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Popup;

/*
    <Confetti width={windowSize.width} height={windowSize.height} />
            
*/
