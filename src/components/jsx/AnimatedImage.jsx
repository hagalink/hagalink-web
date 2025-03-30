import { motion } from "framer-motion";

const AnimatedImage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <motion.img
        src="/Logo.png" 
        alt="AnimatedImage Image"
        className="absolute"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
