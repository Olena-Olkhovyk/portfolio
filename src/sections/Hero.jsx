import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from "../constans";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/cube";
import HeroCamera from "../components/HeroCamera";
import Button from '../components/Button.jsx';

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // const x = useControls('Room', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max:10
    //     },
    //     positionY: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //      positionZ: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max:10
    //     },
    //     rotationY: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //      rotationZ: {
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max:10
    //     }
    // })
    return(
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Olena <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Websites...</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva/> */}
                {/* space for 3D scene */}
                <Canvas className="w-full h-full">
                    {/* when room is loading  */}
                    <Suspense fallback={<CanvasLoader/>}>  
                        {/* Through camera user "watch" scene */}     
                        <PerspectiveCamera makeDefault position={[0,0,20]}/>
                        <HeroCamera isMobile={isMobile}>
                            <Room 
                                // scale={0.07} 
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        {/* Group almost like div */}  
                        <group>
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition}/>
                        </group>
                        {/* For scene not to be dark */}  
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />                    
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero;