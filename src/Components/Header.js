import HeaderImg from '../Images/header.png'
import Button from './Button'

const Header = () => {
  return ( 
    <header className="header">
      <svg className="header__bg" width="1000" height="964" viewBox="0 0 1000 964" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
          <path d="M60 0H1000V900H315.366C306.305 900 298.376 893.908 296.041 885.153L60 0Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
          <filter id="filter0_d" x="0" y="-56" width="1060" height="1020" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="30"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear" x1="1000" y1="-5.85185e-05" x2="60" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8BF42"/>
          <stop offset="1" stopColor="#F2C94C"/>
          </linearGradient>
          </defs>
        </svg>
        <div className="titles">
          <h1 className="titles__title">Зарабатывайте больше <br/> работая  меньше!</h1>
          <p className="titles__sub"><span>CryptoCash</span> знает как вам помочь</p>
          <Button buttonText="Инвестировать сейчас"/>
        </div>
        <img className="header__img" src={HeaderImg} alt="HeaderImg"/>
    </header>
   );
}
 
export default Header;