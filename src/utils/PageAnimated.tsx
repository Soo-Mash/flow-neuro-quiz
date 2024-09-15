import { motion } from 'framer-motion';

const animations = {
  intial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const PageAnimated = ({ children }: any) => {
  return (
    <motion.div
      variants={animations}
      initial="intial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageAnimated;
