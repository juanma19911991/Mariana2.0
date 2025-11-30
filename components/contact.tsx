"use client"

import { useEffect, useRef, useState } from "react"

export default function Contact() {
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
      id="contacto"
      ref={ref}
      style={{
        padding: "120px 10%",
        backgroundColor: "#ffe8f1",
        textAlign: "center",
        transition: "all 0.8s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
      }}
    >
      <h2 style={{ fontSize: "40px", fontFamily: '"Playfair Display", serif', color: "#333", marginBottom: "15px" }}>
        Contacto
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "30px", color: "#333" }}>
        Haceme tu pedido por Instagram o WhatsApp:
      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "30px" }}>
        <a
          href="https://www.instagram.com/amourcookies____/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 25px",
            color: "white",
            backgroundColor: "#c76b82",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a64b62")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#c76b82")}
        >
          Instagram
        </a>
        <a
          href="https://wa.me/5493513741981"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            margin: "10px",
            padding: "12px 25px",
            color: "white",
            backgroundColor: "#c76b82",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a64b62")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#c76b82")}
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
