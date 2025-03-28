import { motion } from "framer-motion";

const AnimatedImage = () => {
  return (
    <div className="h-screen w-screen flex gap-20 items-center justify-center text-center relative overflow-hidden">
      <motion.img
        src="/favicon.svg" 
        alt="AnimatedImage Image"
        className="absolute"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 2 }}
      >
        <div className="bg-gray-800 py-3 px-3">
          <h1 className="text-8xl font-bold text-white"></h1>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
