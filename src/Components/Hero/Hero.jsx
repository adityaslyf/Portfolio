
import ProfileImage from '../../assets/aditya-removebg-preview.png'
/* Import the entire animate.css library */
import 'animate.css';
import IndiaFlag from '../../assets/india.png'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='flex'>
  <div className='pt-72 pl-16 pr-8 flex flex-col'>
    <h2 className='name text-4xl pb-6 animate__bounceIn'>Aditya Varshney</h2>
    <h1 className='text-7xl pt-6 animate-bounce'>Web Developer</h1>
    <h1 className='text-7xl mt-6 flex items-center'>From <img className=' h-16 ml-3 mt-2' src={IndiaFlag} alt="Indianflag" /></h1>

    <div className="mt-8 flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mr-4">
        See my latest work
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
        Contact me
      </button>
    </div>
  </div>

  <img
    src={ProfileImage}
    className="h-full object-cover w-1/2 right-0 animate__bounceIn   "
    alt=""
  />
</div>

     </>
   
  )
}
export default Hero