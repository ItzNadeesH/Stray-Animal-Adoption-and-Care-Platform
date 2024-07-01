import Layout from './Layout';
import hero from '../assets/hero-image.svg';

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
                  About Us
                </button>
                <button className="block ml-2 py-1 w-full bg-white text-cyan-blue border border-cyan-blue rounded-full hover:bg-[#000000] hover:text-white transition">
                  Contact
                </button>
              </div>
            </div>
            <div className="w-[480px] mr-[80px]">
              <img src={hero} alt="hero-image" />
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-center text-[40px] mb-10">Our Services</h2>
            <div class="grid grid-cols-4 gap-4">
              <div>
                <h3 className="text-center">Adoption</h3>
              </div>
              <div>
                <h3 className="text-center">Lost and Found</h3>
              </div>
              <div>
                <h3 className="text-center">Adoption</h3>
              </div>
              <div>
                <h3 className="text-center">Store</h3>
              </div>
              <div>
                <h3 className="text-center">Shelters</h3>
              </div>
              <div>
                <h3 className="text-center">Volunteers</h3>
              </div>
              <div>
                <h3 className="text-center">Donations</h3>
              </div>
              <div>
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
