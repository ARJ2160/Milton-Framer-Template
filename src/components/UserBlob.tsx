import { twMerge } from 'tailwind-merge';

interface IUserBlob {
  image: string;
  blogText: string;
  blogSubText: string;
  extraClasses: string;
}

export const UserBlob = ({
  image,
  blogText,
  blogSubText,
  extraClasses
}: IUserBlob) => {
  return (
    <div className='center-flex m-3'>
      <img className='w-28 h-28 mt-32' src={image} alt='' />
      <div
        className={twMerge('w-1/2 h-fit p-6 rounded-2xl mb-16', extraClasses)}
      >
        <div className='text-base font-bold mb-5'>{blogText}</div>
        <div className='text-gray-500 font-semibold'>{blogSubText}</div>
      </div>
    </div>
  );
};
