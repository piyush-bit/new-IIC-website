import React, { useState } from 'react';
import { FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="w-full ">
      {/*  */}
      <div className="flex flex-col md:flex-row gap-8 p-8">
        {/*  */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-henich flex items-center gap-2 font-heinch">
            <FaLocationArrow /> Location:
          </h3>
          <p className="mt-2 font-henich text-sm font-heinch">
            Idea Innovation Cell, SAC, VSS University of Technology (Formerly known as University College of Engineering), Burla, Sambalpur -<span className='font-sans text-[8px]'>768018</span>
          </p> 

          <h3 className="text-lg font-henich flex items-center gap-2 mt-4">
            <FaEnvelope /> Email:
          </h3>
          <p className="mt-2 font-henich text-sm">iic.vssut@gmail.com</p>

          <h3 className="text-lg font-henich flex items-center gap-2 mt-4">
            <FaPhone /> Call:
          </h3>
          <p className="mt-2  font-henich text-sm">+91-7608009484</p>
          <p className="mt-2 font-henich text-sm">+91-83288 43197</p>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 border-l-4 border-blue-500 pl-8 md:pl-16 pt-6 md:pt-0">
          <h3 className="text-xl font-semibold mb-4 font-heinch">Leave a message for us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sm font-medium">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md text-sm w-full"
              />
            </label>

            <label className="text-sm font-medium">
              Email Address:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md text-sm w-full"
              />
            </label>

            <label className="text-sm font-medium">
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md text-sm w-full"
              />
            </label>

            <label className="text-sm font-medium">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-2 p-3 border border-gray-300 rounded-md text-sm h-32 w-full"
              />
            </label>

            <button
              type="submit"
              className="mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


