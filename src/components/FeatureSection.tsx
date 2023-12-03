import { twMerge } from 'tailwind-merge';
import { Chips, UserBlob } from '.';
import { motion } from 'framer-motion';

interface IFeatureSection {
  index: number;
  title: string;
  chipText: string;
  subText: string;
  emojiText: string;
  emojiImage: string;
  emojiUsername: string;
  featureImage: string;
}

export const FeatureSection = ({
  index,
  title,
  chipText,
  subText,
  emojiText,
  emojiImage,
  emojiUsername,
  featureImage
}: IFeatureSection) => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5'>
      <motion.div
        style={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.3
        }}
        className={twMerge(
          'col-span-1 flex flex-col',
          index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
        )}
      >
        <Chips classNames='bg-[#fdded6]'>{chipText}</Chips>
        <div className='headingTitle text-lightGrey'>{title}</div>
        <div className='text-gray-500 font-medium leading-8 text-xl mt-10'>
          {subText}
        </div>
        <UserBlob
          image={emojiImage}
          blogText={emojiText}
          blogSubText={emojiUsername}
          extraClasses={'bg-lightGrey text-white'}
        />
      </motion.div>
      <div
        className={twMerge(
          'col-span-1 flex flex-col',
          index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'
        )}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
        >
          <img src={featureImage} className='' />
        </motion.div>
      </div>
    </div>
  );
};
