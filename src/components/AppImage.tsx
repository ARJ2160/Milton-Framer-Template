import AppScreenshot from '../assets/images/AppImage.webp';
import { motion } from 'framer-motion';

export const AppImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'tween',
        duration: 0.5
      }}
      className='w-full sm:h-screen h-fit sm:px-10 mb-20 center-flex'
    >
      <img className='' src={AppScreenshot} />
    </motion.div>
  );
};
