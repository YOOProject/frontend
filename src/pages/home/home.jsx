import React from 'react';
import Hero from "../../../public/hero.png";

const Home = () => {
  return (
    <div className="container mx-auto grid font-poppins w-[1378px] h-[565px] items-center justify-center">
     

      <main className="flex items-center">
        <section className="w-full  my-16">
          <p className="text-lg w-100 mb-8 ">Order Restaurant food, takeaway and groceries.</p>
          <h2 className="text-4xl font-bold mb-4">Feast Your Senses,<br /><span className='text-red-600'>Fast and Fresh</span></h2>
          
          <div className="flex justify-center space-x-2 mb-8">
            <input type="text" placeholder="e.g. 500072" className="p-2 border  rounded-3xl" />
            <button className="bg-Red text-white py-2 px-4 rounded-3xl w:420.93 ">Search</button>
          </div>
          
        </section>
        <section>
          <img src={Hero} alt="Hero Image" className="w-867 " />
        </section>

        <section className="w-full flex justify-center space-x-8 my-16">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
            <p className="text-center">We've Received your order! Awaiting Restaurant acceptance.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
            <p className="text-center">Order Acceptance.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
            <p className="text-center">Your order will be delivered Smoothly.</p>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Home;
