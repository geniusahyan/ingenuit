import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } =  useGLTF("./bird.glb");
    const { actions } = useAnimations(animations, birdRef);

    useEffect(()=>{
      actions['Take 001'].play();
    },[])

    useFrame(({clock, camera})=>{
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2 ;

        if(birdRef.current.position.x > camera.position.x + 15){
            birdRef.current.rotation.y = Math.PI ;
        }else if(birdRef.current.position.x < camera.position.x - 17){
            birdRef.current.rotation.y = 0 ;
        }

        if(birdRef.current.rotation.y === 0){
            birdRef.current.position.x += 0.01 ;
            birdRef.current.position.z -= 0.005 ;
        }else{
            birdRef.current.position.x -= 0.01 ;
            birdRef.current.position.z += 0.005 ;
        }

    })

  return (
        <mesh
            position={[-5, 2, 1]}
            scale={[0.003,0.003,0.003]}
            ref={birdRef}
        >
            <primitive
                object={scene}
            />
        </mesh>
  )
}

export default Bird