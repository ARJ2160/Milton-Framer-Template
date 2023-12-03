import { Button } from '.';
import { data } from '../../data/data';

export const Dropdown = ({ isOpen, toggle }: any): JSX.Element => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-7 gap-4 text-center w-full mt-20 p-5 items-center fixed z-10 dark:bg-white dark:text-black origin-top transition-all'
          : 'hidden'
      }
    >
      {data.navbar.links.map((link, key) => {
        return (
          <div
            key={key}
            className='text-sm text-gray-500 col-span-1'
            onClick={toggle}
          >
            <a
              href={'/'}
              className='font-bold leading-[115%] hover:border-b-2 border-black hover:text-black'
            >
              {link}
            </a>
          </div>
        );
      })}
      <div className='p-4 pt-0' onClick={toggle}>
        <Button classNames='col-span-1 bg-transparent text-black'>
          Log in
        </Button>
        <Button classNames='col-span-1 bg-lightGrey text-white rounded-lg'>
          Get Started
        </Button>
      </div>
    </div>
  );
};
