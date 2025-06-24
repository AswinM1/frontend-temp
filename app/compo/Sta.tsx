import React from 'react';

function Sta() {
  return (
    <div className='w-full flex justify-center mb-20 px-4'>
      <div
        style={{
          background: 'linear-gradient(to right bottom, yellow, purple 20%, #1e1e1e 65%)',
        }}
        className='flex md:w-[700px] w-full py-6 px-4 h-auto md:h-60 justify-center items-center rounded-2xl gap-4 flex-col text-center'
      >
        <div className='font-sans font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight flex flex-wrap justify-center mb-4'>
          Want to Know more? Join us now
        </div>
        <button className='bg-white px-4 py-2 rounded-md text-black font-sans text-sm sm:text-base'>
          join now
        </button>
      </div>
    </div>
  );
}

export default Sta;
