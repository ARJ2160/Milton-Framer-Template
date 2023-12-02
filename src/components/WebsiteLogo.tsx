import { data } from '../../data/data';
import Logo from '../assets/logo.png';

export const WebsiteLogo = () => {
  return (
    <>
      <img src={Logo} alt='' />
      <div className='text-2xl font-bold'>{data.websiteName}</div>
    </>
  );
};
