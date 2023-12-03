import { data } from '../../data/data';
import { UserBlob } from './UserBlob';
import UserEmoji from '../assets/images/EmojiUser/emojiUser5.webp';
import { Button } from '.';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{
        type: 'tween',
        duration: 0.2
      }}
      className='center-flex flex-col gap-5 h-screen mt-10'
    >
      <div className='upperText sm:mt-0 mt-16'>{data.cta.upperText}</div>
      <div className='headingTitle'>{data.cta.title}</div>
      <div className='text-gray-500 sm:w-1/3 w-11/12 text-center mt-5'>
        {data.cta.subText}
      </div>
      <Button classNames='bg-lightGrey hover:bg-black hover:scale-110 transition p-4 rounded-xl'>
        {data.hero.ctaText}
      </Button>
      <div>
        <UserBlob
          image={UserEmoji}
          blogText={data.cta.userText}
          blogSubText={data.cta.userName}
          extraClasses='bg-[#fee9cb]'
        />
      </div>
    </motion.div>
  );
};
