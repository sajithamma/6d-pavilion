import { Canvas } from "@react-three/fiber";
import { SixDPavillion } from "../components/SixDPavillion";



export default function Index() {





  return (<>

    <div style={{ width: "100vw", height: "100vh" }}>

      <Canvas style={{ background: "#171717" }}

        camera={{

          fov: 70, near: 1, far: 20000,
          position: [57.5, 21.75, -39.3]


        }}>

        <SixDPavillion />

      </Canvas>


    </div>


  </>);


}