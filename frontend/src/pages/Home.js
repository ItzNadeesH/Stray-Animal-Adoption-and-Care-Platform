import Layout from './Layout';
import hero from '../assets/hero-image.svg';
import { Link } from 'react-router-dom';
//icons
import { IoStorefront } from 'react-icons/io5';
import { FaDog } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { MdVolunteerActivism } from 'react-icons/md';
import { FaDonate } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import { BiSolidInjection } from 'react-icons/bi';
import { MdEventNote } from 'react-icons/md';

const Home = () => {
  return (
    <>
      <Layout>
        <div className="max-w-screen-xl mx-auto p-5">
          <section className="flex flex-col-reverse items-center lg:flex-row justify-between">
            <div className="lg:ml-[80px] mt-10">
              <h1 className="text-[36px] lg:text-[56px] lg:leading-20 lg:w-[400px]">
                Find Perfect Pet Service You Want . . .
              </h1>
              <p className="text-[#767676] lg:w-[400px] mt-4">
                Find your perfect pet service match here. From trusted sitters
                to expert groomers, discover tailored options for your furry
                friend.
              </p>
              <div className="flex mt-3">
                <button className="block mr-2 py-1 w-full bg-cyan-blue text-[#ffffff] border border-cyan-blue rounded-full hover:bg-[#000000] transition">
                  <Link to="/about">About Us</Link>
                </button>
                <button className="block ml-2 py-1 w-full bg-white text-cyan-blue border border-cyan-blue rounded-full hover:bg-[#000000] hover:text-white transition">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
            <div className="w-[480px] mr-[80px]">
              <img src={hero} alt="hero" />
            </div>
          </section>
          <section className="mt-2">
            <h2 className="text-center text-[40px] mb-10">Our Services</h2>
            <div className="grid grid-cols-4 gap-5 gap-y-10">
              <div>
                <div className="flex justify-center">
                  <FaDog size={56} />
                </div>
                <h3 className="text-center">Adoption</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <MdEventNote size={56} />
                </div>
                <h3 className="text-center">Events</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <BiSolidInjection size={56} />
                </div>
                <h3 className="text-center">Veterinary</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <IoBagHandle size={56} />
                </div>
                <h3 className="text-center">Store</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <IoStorefront size={56} />
                </div>
                <h3 className="text-center">Shelters</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <MdVolunteerActivism size={56} />
                </div>
                <h3 className="text-center">Volunteers</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <FaDonate size={56} />
                </div>
                <h3 className="text-center">Donations</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <MdFeedback size={56} />
                </div>
                <h3 className="text-center">Feedbacks</h3>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
