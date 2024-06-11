import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import './Hero.css';

const Pyramid = ({ position, args, color }) => {
    const ref = useRef();
  
    useFrame((state, delta, frame) => {
      ref.current.rotation.x += delta * 0.2;
    });
  
    return (
      <mesh ref={ref} position={position} scale={[4,4,4]}>
         <tetrahedronGeometry args={args} />
         <meshBasicMaterial color={color} wireframe />
      </mesh>
    );
  };

  const PyramidTwo = ({ position, args, color }) => {
    const ref = useRef();
  
    useFrame((state, delta, frame) => {
      ref.current.rotation.y += delta * 0.2;
    });
  
    return (
      <mesh ref={ref} position={position} scale={[6,6,6]}>
         <tetrahedronGeometry args={args} />
         <meshBasicMaterial color={color} wireframe />
      </mesh>
    );
  };

const Hero = () => {
  return (
    <section id='home'>
      <div className="pyramid_obj">
      <Canvas className="hero-canvas">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Pyramid position={[-2, 0, -5]} args={[1, 1]} color="black"  />
      </Canvas>
      </div>
      
      <div className="pyramid_obj_2">
      <Canvas className="hero-canvas">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <PyramidTwo position={[-2, 0, -5]} args={[1, 1]} color="black"  />
      </Canvas>
      </div>
      
      <div className="hero_wrapper">
        <div className="container">
        
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 d-flex left-box">
              <div>
                <h1 className='hero_head'>FULL STACK <br></br> DEVELOPER</h1>
                <p className='hero_passage'>👋 Hi,I am Sreenandhan.A skilled Full <br></br> Stack Developer hailing from Palakkad, <br></br> Kerala, India.</p>
                <div className='hero_icon'>
                  <img src="./icons/github.svg"  alt="" />
                  <img src="./icons/linkedin.svg"  alt="" />
                  <img src="./icons/twitter.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex right-box">
              <img src="./images/hero.png" alt="" className='hero_img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
