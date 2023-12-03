import { Chips } from '.';
import { motion } from 'framer-motion';

interface IFeatureCard {
  image: string;
  title: string;
  subText: string;
}

export const FeatureCard = ({ image, title, subText }: IFeatureCard) => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{
        type: 'tween',
        duration: 0.4
      }}
      className='center-flex flex-col transition-all '
    >
      <div>
        <img
          className='object-fit object-center w-60 h-60'
          src={image}
          alt=''
        />
      </div>
      <div className='mt-5'>
        <Chips classNames={`bg-stone-700 text-white`}>{title}</Chips>
        <div className='text-gray-500 mt-6'>{subText}</div>
      </div>
    </motion.div>
  );
};
