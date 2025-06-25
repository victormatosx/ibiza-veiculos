"use client"

import { Eye, MessageCircle, Gauge, Fuel, Calendar } from "lucide-react"

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="card card-premium">
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />

        {vehicle.featured && (
          <div
            className="badge badge-warning"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              boxShadow: "var(--shadow-md)",
            }}
          >
            Destaque
          </div>
        )}

        {/* Price Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "var(--primary-blue)",
            }}
          >
            R$ {vehicle.price?.toLocaleString("pt-BR")}
          </div>
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "var(--gray-900)",
            lineHeight: "1.3",
          }}
        >
          {vehicle.name}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "var(--gray-50)",
              borderRadius: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "var(--gray-700)",
            }}
          >
            <Gauge className="icon" style={{ width: "1rem", height: "1rem" }} />
            <span>{vehicle.km}km</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "var(--gray-50)",
              borderRadius: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "var(--gray-700)",
            }}
          >
            <Fuel className="icon" style={{ width: "1rem", height: "1rem" }} />
            <span>{vehicle.fuel}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "var(--gray-50)",
              borderRadius: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "var(--gray-700)",
            }}
          >
            <Calendar className="icon" style={{ width: "1rem", height: "1rem" }} />
            <span>{vehicle.year}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button className="btn btn-primary" style={{ flex: 1 }}>
            <Eye className="icon" />
            Ver Detalhes
          </button>
          <button className="btn btn-secondary" style={{ padding: "0.875rem" }}>
            <MessageCircle className="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
