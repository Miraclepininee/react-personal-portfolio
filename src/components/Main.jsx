import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
  useEffect(() => {
    // Dynamically load the spline-viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.63/build/spline-viewer.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  <div id='main' className="relative w-full h-screen overflow-hidden">
      {/* Spline background */}
      <spline-viewer
        url="https://prod.spline.design/Um4Atpi4Q0ZeoMAC/scene.splinecode"
        style={{
          position: 'absolute',
          bottom: '-60px', // Move up to crop bottom
          left: 0,
          width: '100vw',
          height: 'calc(100vh + 60px)', // Increase height to keep top visible
          zIndex: 0,
        }}
      ></spline-viewer>
      {/* Overlay content */}
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 z-10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Miracle Pininee</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                'Front End Developer',
                3000,
                'Coder',
                1000,
                'Tech Enthusiast',
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebook className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
            <FaGithub className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main