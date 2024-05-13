import React from 'react';
import Layout from './Layout';

const About = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto p-5">
          <div>
            <h1 className="text-[34px] md:text-center md:text-[56px]">
              About us
            </h1>
          </div>
          <div>
            <h2 className="text-[23px] md:text-[30px] my-5">
              Welcome to AWPA – Where Every Paw Matters!
            </h2>
            <p className="text-center mb-10">
              At AWPA, our love for pets is at the heart of everything we do. We
              understand the deep bond between humans and their furry
              companions, and we're dedicated to providing the utmost care and
              support for every precious pet that comes our way. Founded with a
              passion for improving the lives of pets and their owners, AWPA is
              more than just a pet caring service – it's a community of animal
              lovers committed to ensuring the happiness, health, and wellbeing
              of our four-legged friends.
            </p>
            <div className="flex justify-between">
              <div>
                <h2 className="text-[23px] md:text-[30px] my-5">Our Mission</h2>
                <p className="my-5 max-w-[400px]">
                  Our mission is simple: to create a world where every pet
                  receives the love, care, and attention they deserve. Whether
                  it's a playful pup, a curious kitty, or any other beloved
                  creature, we believe that every pet is unique and deserving of
                  the best care possible.
                </p>
              </div>
              <div>
                <h2 className="text-[23px] md:text-[30px] my-5">
                  Meet Our Team
                </h2>
                <p className="my-5 max-w-[400px]">
                  Behind every wagging tail and contented purr is a dedicated
                  team of animal enthusiasts who are passionate about what they
                  do. From certified veterinarians and experienced pet sitters
                  to compassionate groomers and trainers, our team is committed
                  to providing top-notch care and attention to every pet in our
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
