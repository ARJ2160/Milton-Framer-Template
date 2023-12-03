import { Button, Dropdown, WebsiteLogo } from '.';
import { data } from '../../data/data';

interface INavbar {
  toggle: () => void;
  isOpen: boolean;
}

export const Navbar = ({ toggle, isOpen }: INavbar) => {
  return (
    <>
      <div className='w-full h-20 p-7 border-b-2 bg-white center-flex !justify-between fixed z-10 top-0'>
        <div className='center-flex !justify-start'>
          <WebsiteLogo />
        </div>
        <div
          className='px-4 cursor-pointer md:hidden burger-menu'
          onClick={toggle}
        >
          <div
            className={isOpen ? 'toggled burger burger-1' : 'burger burger-1'}
          ></div>
          <div
            className={isOpen ? 'toggled burger burger-2' : 'burger burger-2'}
          ></div>
          <div
            className={isOpen ? 'toggled burger burger-3' : 'burger burger-3'}
          ></div>
        </div>
        <div className='center-flex flex-start h-min w-min relative md:!flex !hidden'>
          {data.navbar.links.map((link, key) => {
            return (
              <div key={key} className='text-sm text-gray-500 mr-5'>
                <a
                  href={'/'}
                  className='font-bold leading-[115%] hover:border-b-2 border-black hover:text-black'
                >
                  {link}
                </a>
              </div>
            );
          })}
        </div>
        <div className='center-flex md:!flex !hidden'>
          <Button classNames='bg-transparent text-black hover:scale-110 transition'>
            Log in
          </Button>
          <Button classNames='bg-lightGrey text-white rounded-lg hover:scale-110 transition'>
            Get Started
          </Button>
        </div>
      </div>
      <Dropdown toggle={toggle} isOpen={isOpen} />
    </>
  );
};
