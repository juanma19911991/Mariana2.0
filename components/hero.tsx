"use client"

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        height: "90vh",
        marginTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/placeholder.svg?key=ikwto')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(255, 210, 225, 0.72)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          width: "55%",
          height: "100%",
          padding: "120px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontFamily: '"Playfair Display", serif', color: "#4c1f24", margin: 0 }}>
          Ahora Disponible
        </h1>
        <h2
          style={{
            fontSize: "44px",
            fontFamily: '"Playfair Display", serif',
            color: "#4c1f24",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          Delicias de Amour Cookies
        </h2>
        <p style={{ fontSize: "18px", marginTop: "25px", maxWidth: "450px", color: "#333", margin: "25px 0 0 0" }}>
          Cookies, tortas y postres artesanales inspirados en la pastelería americana.
        </p>
        <a
          href="#productos"
          style={{
            background: "#b76b82",
            color: "white",
            padding: "14px 26px",
            borderRadius: "8px",
            marginTop: "30px",
            textDecoration: "none",
            fontWeight: 600,
            transition: "0.2s",
            display: "inline-block",
            width: "fit-content",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#a0576a")}
          onMouseLeave={(e) => (e.target.style.background = "#b76b82")}
        >
          Hacer Pedido
        </a>
      </div>
    </section>
  )
}
