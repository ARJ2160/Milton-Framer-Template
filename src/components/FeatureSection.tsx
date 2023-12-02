import { twMerge } from 'tailwind-merge';
import { Chips, UserBlob } from '.';

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
      <div
        className={twMerge(
          'col-span-1 flex flex-col',
          index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
        )}
      >
        <Chips classNames='bg-[#fdded6]'>{chipText}</Chips>
        <div className='text-5xl font-extrabold leading-[130%] mt-4'>
          {title}
        </div>
        <div className='text-gray-500 font-medium leading-8 text-xl mt-10'>
          {subText}
        </div>
        <UserBlob
          image={emojiImage}
          blogText={emojiText}
          blogSubText={emojiUsername}
        />
      </div>
      <div
        className={twMerge(
          'col-span-1 flex flex-col',
          index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'
        )}
      >
        <img src={featureImage} className='' />
      </div>
    </div>
  );
};
