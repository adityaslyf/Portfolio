 import ProfileImage from '../../assets/aditya-removebg-preview.png'
import 'animate.css';
import IndiaFlag from '../../assets/india.png';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 pt-16 md:pt-72 pl-8 pr-8 flex flex-col'>
          <h2 className='name text-4xl pb-6 animate__bounceIn'>Aditya Varshney</h2>
          <h1 className='text-4xl md:text-7xl pt-6 animate-bounce'>Web Developer</h1>
          <h1 className='text-4xl md:text-7xl mt-6 flex items-center'>From <img className='h-16 ml-3 mt-2' src={IndiaFlag} alt="Indianflag" /></h1>

          <div className="mt-8 flex flex-col md:flex-row">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 md:mr-4 md:mb-0">
              See my latest work
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Contact me
            </button>
          </div>
        </div>
        {/* Uncomment the following image section for ProfileImage */}
         <img
          src={ProfileImage}
          className="md:w-1/2 md:h-[100vh] hidden md:block object-cover animate__bounceIn"
          alt=""
        /> 
      </div>
    </>
  );
};

export default Hero;
