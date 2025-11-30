"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="nosotros"
      ref={ref}
      style={{
        display: "flex",
        padding: "120px 10%",
        gap: "40px",
        backgroundColor: "#ffe8f1",
        alignItems: "center",
        transition: "all 0.8s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
      }}
    >
      <div>
        <img
          src="/placeholder.svg?key=fug9r"
          alt="Mariana"
          style={{
            width: "380px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      <div>
        <h2
          style={{
            fontSize: "40px",
            fontFamily: '"Playfair Display", serif',
            color: "#333",
            marginBottom: "15px",
          }}
        >
          Sobre Nosotros
        </h2>
        <p style={{ marginTop: "15px", fontSize: "18px", color: "#333" }}>
          Hola, me llamo Mariana. Este es mi mini emprendimiento porque estoy re loca de las cookies. Me encanta crear
          sabores, decorar y compartir algo dulce con las personas que quiero.
        </p>
        <p style={{ marginTop: "15px", fontSize: "18px", color: "#333" }}>Gracias por apoyar Amour Cookies 🩷🍪</p>
      </div>
    </section>
  )
}
