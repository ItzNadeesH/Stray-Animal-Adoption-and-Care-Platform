import React from 'react';
import Layout from './Layout';

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto p-5">
          <div>
            <h1 className="text-[34px] md:text-center md:text-[56px]">
              Contact us
            </h1>
            <p className="mt-6 mb-4 md:text-center md:text-[14px] md:w-[670px] md:mx-auto">
              We’d love to hear from you – please use the form to send us your
              message or ideas. Or simply pop in for a cup of fresh tea and a
              cookie:
            </p>
            <div className="md:flex justify-center md:text-[14px] md:mt-6">
              <p className="mb-4 md:px-6">
                name.lk
                <br /> Matara, Sri Lanka
              </p>
              <p className="mb-4 md:px-6">
                Call us: 0413 127 110 <br />
                Email: info@petbarn.lk
              </p>
            </div>
          </div>
          <div className="py-4 md:flex md:justify-center md:mt-10">
            <h2 className="text-[23px] leading-7 mb-6 md:text-[30px] md:w-1/2 md:flex md:w-[440px] md:mx-6">
              Have a question or comment? Use the form below to send us a
              message.
            </h2>
            <form className="md:w-[440px] md:mx-6">
              <div className="mb-3">
                <input
                  className="w-full py-[6px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-[#000000] placeholder:text-[14px]"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full py-[6px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-[#000000] placeholder:text-[14px]"
                  type="email"
                  placeholder="Email address"
                  autoComplete="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full py-[6px] px-[15px] rounded-[12px] outline-0 border-2 border-cyan-blue active:border-[#000000] placeholder:text-[14px]"
                  type="tel"
                  placeholder="Phone"
                  autoComplete="phone"
                  name="phone"
                  id="phone"
                />
              </div>
              <div>
                <textarea
                  className="text-[14px] px-4 py-2.5 mb-3 h-[80px] border-2 border-[#000000] rounded-[12px] w-full placeholder:text-[#00000080]"
                  name="comment"
                  id="comment"
                  placeholder="Comment"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="block py-3 w-full bg-cyan-blue text-[#ffffff] rounded-full hover:bg-[#000000] transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
