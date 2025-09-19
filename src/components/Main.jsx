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
    <div id='main' className="relative w-full h-screen">
      {/* Spline background */}
      <spline-viewer
        url="https://prod.spline.design/Um4Atpi4Q0ZeoMAC/scene.splinecode"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      ></spline-viewer>
        {/* Overlay to hide watermark */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '180px', // Adjust width as needed
            height: '60px', // Adjust height as needed
            // background: 'rgba(255,255,255,0.7)', // Semi-transparent white
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      {/* Overlay content */}
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 z-10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Miracle Pininee</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                'Developer',
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