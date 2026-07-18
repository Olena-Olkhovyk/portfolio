import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Room from "../components/Room";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => {
    return(
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Olena <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Websites...</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* 3d started */}
                <Canvas className="w-full h-full">
                    {/* when room is loading  */}
                    <Suspense fallback={<CanvasLoader/>}>        
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <Room scale={0.05} position={[0,0,0]} rotation={[0, -Math.PI/2,0]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero;