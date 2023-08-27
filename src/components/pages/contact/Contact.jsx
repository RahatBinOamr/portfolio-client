import emailjs from '@emailjs/browser';
import cogoToast from 'cogo-toast';
import React, { useRef } from 'react';
import { Slide } from 'react-reveal';
const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4645p3h',
        'template_kpzcjlw',
        form.current,
        'oMQ2ftP5fxcOXIrSq'
      )
      .then(
        result => {
          if (result.text === 'OK') {
            cogoToast.success('Your mail was sent successfully');
            form.current.reset();
          }
        },
        error => {
          cogoToast.error(error.text);
        }
      );
  };
  return (
    <Slide right>
      {' '}
      <div className="mt-10 mb-10">
        <h1 className=" text-center  mt-10 text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          {' '}
          Contact Me
        </h1>

        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark">
          <div className="hidden md:block lg:hidden xl:block  flex-col justify-between ">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leadi lg:text-5xl">
                Let's talk! <span className="animate-ping text-5xl">😍</span>
              </h2>
              <div className="dark:text-gray-400">
                Vivamus in nisl metus? Phasellus.
              </div>
            </div>
            <img
              src="https://www.mambaui.com/assets/svg/doodle.svg"
              alt=""
              className="p-6 h-52 md:h-64"
            />
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg p-8 items-center justify-center rounded-lg shadow-md border border-pink-600 m-2"
          >
            <div className="mb-4">
              <label htmlFor="user_name" className="block font-medium mb-1">
                Name <span className="animate-ping text-2xl">💕💕💕</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="user_email" className="block font-medium mb-1">
                Email <span className="animate-ping text-2xl">💕💕💕</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message <span className="animate-ping text-2xl">💕💕💕</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button className="text-center w-full items-center bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-md text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Slide>
  );
};

export default Contact;
