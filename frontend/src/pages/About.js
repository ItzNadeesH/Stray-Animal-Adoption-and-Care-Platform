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
            <h2 className="text-[23px] md:text-[30px]">Who are we</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur excepturi tempore quas adipisci, reiciendis suscipit
              soluta labore illo, placeat ad nihil, iste numquam? Reiciendis
              tempore officiis minus laudantium quas eius.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
