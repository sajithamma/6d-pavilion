
# 6D Pavillion, 6 Videos played in each face of a cube
3
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/sajithamma/6d-pavilion)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Screenshot

![alt Screenshot](/screenshot.png)

## The Original Video
### Each face of the cube has a video texture from the  video with different offset and repeat

![alt Screenshot2](/screenshot2.png)


```javascript

 <mesh scale={1} rotation={[0, Math.PI, 0]} position={[0, 20, 0]} ref={leftscreen}>
 
    <planeBufferGeometry attach="geometry" args={[80, 40]} />

    <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>

        <videoTexture repeat={[0.6, 0.35]} offset={[0.4, 0]} attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
        <videoTexture attach="emissiveMap" args={[video]} />

    </meshStandardMaterial>

 </mesh>

```


## Installation 

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.