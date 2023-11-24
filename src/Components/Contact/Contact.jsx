// import './Contact.css'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// const Contact = () => {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//       };
//     return (
//         <>
//             <div className=" flex">
//                 <h1>Contact here</h1>
//             </div>
//             <div className=" flex">
//                 <span className=' text-lg'>Your Name </span>
//                 <input className=' mx-9 bg-gray-500'
//                     type="text"
//                     name="name"
//                     id=""
//                     placeholder="Aditya Varshney"
//                 />
//             </div>
// <br />
//             <div className=" flex">
//                 <span>Your Email</span>
//                 <input className=' mx-9  bg-gray-500'
//                     type="email"
//                     name="email"
//                     id=""
//                     placeholder="aditya.varshneymail@gmail.com"
//                 />
//             </div>
// <br />
//             <div className=' flex'>
//                 <span>Message!</span>
//                 <textarea className=' mx-9  bg-gray-500' 
//                     type="message"
//                     name="message"
//                     cols="30"
//                     rows="10"
//                     id=""
//                     placeholder="Hey!"
//                 />
//             </div>
//             <button className=' rounded-lg  text-xl  bg-red-700'>Send</button>
//         </>
//     )
// }
// export default Contact
  // src/App.js
import  { useState } from 'react';


function App() {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className=" h-full w-[100vh] flex items-center justify-center">
      <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  mx-auto lg:w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
