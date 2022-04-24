import Telegram from '../Assets/Img/telegram.svg'
import Instagram from '../Assets/Img/instagram.svg'
import Facebook from '../Assets/Img/facebook.svg'


const Footer = () => {
  return (
    <div className=" bg-slate-800 mt-8">
      <div className="flex-col gap-4 flex md:flex-row text-white items-center justify-between container mx-auto px-8 py-4">
      <div>
        <h3 className='text-center md:text-left'  style={{maxWidth:350}}>The company ITV its good site,  whenever for all people</h3>
      </div>
      <div className='mr-0'>
      
      </div>
      <div className='mb-8 md:mb-0'>
        <p className='md:text-lg'>Followers</p>
        <div className='flex mt-2'>
        <a href="https://t.me/itvuzofficial">
        <img className='mr-2 bg-slate-500 rounded' src={Telegram} alt="telegram" width='20'/>
        </a>
        <a href="https://www.instagram.com/accounts/login/?next=/itv.uz/">
        <img className=' mr-2 bg-slate-500 rounded' src={Instagram} alt="instagram" width='20' />
        </a>
        <a href="https://www.facebook.com/int.television/?fref=ts">
        <img className=' bg-slate-500 rounded' src={Facebook} alt="instagram" width='22'  />
        </a>
        
        </div>
        
      </div>
      <div>
        <h3 className='md:text-lg'>Contact number</h3>
        <a href="tel:123456789" type='tel'>123-45-67-89</a>
      </div>
      </div>
    </div>
  );
};
export default Footer;
