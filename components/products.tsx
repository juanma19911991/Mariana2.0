"use client"

import { useEffect, useRef, useState } from "react"

const products = [
  { name: "Cookie Especial", image: "/placeholder.svg?key=3s5lf" },
  { name: "Cookies Decoradas", image: "/placeholder.svg?key=m3mw2" },
  { name: "Torta Vintage", image: "/placeholder.svg?key=vmx2w" },
  { name: "Box Amour Cookies", image: "/placeholder.svg?key=k6fqf" },
  { name: "Edición Especial", image: "/placeholder.svg?key=efohn" },
]

export default function Products() {
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
      id="productos"
      ref={ref}
      style={{
        padding: "120px 10%",
        textAlign: "center",
        transition: "all 0.8s ease",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <h2 style={{ fontSize: "40px", fontFamily: '"Playfair Display", serif', color: "#333", marginBottom: "40px" }}>
        Nuestros Productos
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {products.map((product, index) => (
          <a
            key={index}
            href="#"
            style={{
              width: "230px",
              backgroundColor: "#ffe6ee",
              borderRadius: "20px",
              padding: "20px",
              textDecoration: "none",
              color: "#000",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              transition: "transform .25s ease, box-shadow .25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.12)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)"
            }}
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontWeight: "bold", color: "#333", margin: 0 }}>
              {product.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
