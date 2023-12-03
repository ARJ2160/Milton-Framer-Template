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
    <div className='center-flex sm:flex-row flex-col sm:m-3 mb-10'>
      <img className='w-28 h-28 sm:mt-32 mt-10' src={image} alt='' />
      <div
        className={twMerge(
          'sm:w-1/2 w-3/4 h-fit sm:p-6 p-4 rounded-2xl mb-16',
          extraClasses
        )}
      >
        <div className='text-base font-bold mb-5'>{blogText}</div>
        <div className='text-gray-500 font-semibold'>{blogSubText}</div>
      </div>
    </div>
  );
};
