"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Planet1 from "../../Assets/Blue_Planet.svg"
import Planet2 from "../../Assets/Neptune.svg"
import Planet3 from "../../Assets/Orange_Planet.svg"
import Planet4 from "../../Assets/Purple_planet.svg"
import Planet5 from "../../Assets/Red_Planet.svg"
import Planet6 from "../../Assets/Sun.svg"
import Planet7 from "../../Assets/Yellow_Planet.svg"

const Orbit = ({ radius }) => {
  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
      }}
    />
  )
}

const Planet = ({ size, orbitRadius, speed, imageUrl, glowColor, offset = 0 }) => {
    const [rotation, setRotation] = useState(Math.random() * 360 + offset)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + speed) % 360)
      }, 50)
      return () => clearInterval(interval)
    }, [speed])
  
    return (
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: -size / 2,
          marginLeft: -size / 2,
          boxShadow: `0 0 ${size / 2}px ${glowColor}`,
          zIndex: 2,
          overflow: "hidden",
        }}
        animate={{
          x: Math.cos(((rotation + offset) * Math.PI) / 180) * orbitRadius,
          y: Math.sin(((rotation + offset) * Math.PI) / 180) * orbitRadius,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      >
        <img
          src={imageUrl}
          alt="planet"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>
    )
  }
  

// New component for the central sun
const CentralSun = ({ size, imageUrl, glowColor }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: `0 0 ${size / 2}px ${glowColor}`,
        zIndex: 3,
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt="sun"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export const SolarSystemBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        height: "100%",
        width: "100%"
      }}
    >
      {/* Central Sun */}
      <CentralSun 
        size={80} 
        imageUrl={Planet6}
        glowColor="#FFA500"
      />

      {/* Orbits */}
      <Orbit radius={150} />
      <Orbit radius={250} />
      <Orbit radius={350} />
      <Orbit radius={450} />
      <Orbit radius={550} />

      {/* Planets */}
      <Planet 
        size={30}
        orbitRadius={150}
        speed={1}
        imageUrl={Planet1}
        // glowColor="#FFD700"
      />
        <Planet 
        size={30}
        orbitRadius={150}
        speed={1}
        imageUrl={Planet7}
        // glowColor="#FF4500"
        offset={180}  // Starts on the opposite side of the orbit
        />
      <Planet 
        size={45}
        orbitRadius={250}
        speed={0.8}
        imageUrl={Planet2}
        glowColor="#87CEEB"
      />
      <Planet 
        size={36}
        orbitRadius={350}
        speed={0.6}
        imageUrl={Planet3}
        glowColor="#FF6347"
      />
      <Planet 
        size={60}
        orbitRadius={450}
        speed={0.4}
        imageUrl={Planet4}
        glowColor="#8A2BE2"
      />
      <Planet 
        size={24}
        orbitRadius={550}
        speed={0.3}
        imageUrl={Planet5}
        glowColor="#00FF7F"
      />
    </div>
  )
}