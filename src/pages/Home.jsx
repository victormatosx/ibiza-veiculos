"use client"

import { useState } from "react"
import { Search, Car, Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import VehicleCard from "../components/VehicleCard"
import heroIbiza from "../assets/hero.png"
import hilux from "../assets/hilux.jpg"
import ram from "../assets/ram.jpg"
import zrv from "../assets/zrv.jpg"
import bmw from "../assets/bmw.jpg"
import bronco from "../assets/bronco.jpg"
import sw4 from "../assets/sw4.jpg"

import videoFile from "../assets/video-ibiza.mp4"

const Home = () => {
  const [searchFilters, setSearchFilters] = useState({
    marca: "",
    modelo: "",
    ano: "",
  })

  const featuredVehicles = [
    {
      id: 1,
      name: "TOYOTA HILUX CD GR-S 4X4 2.8 TDI DIES. AUT.",
      price: 295900,
      km: "23.000",
      fuel: "Diesel",
      year: "2023",
      image:
        hilux,
      featured: true,
    },
    {
      id: 2,
      name: "RAM 2500 LARAMIE 6.7 TDI CD 4X4 DIESEL",
      price: 319900,
      km: "47.880",
      fuel: "Diesel",
      year: "2020",
      image:
        ram,
      featured: true,
    },
    {
      id: 3,
      name: "HONDA ZR-V TOURING 2.0 16V 5P AUT.",
      price: 169900,
      km: "4.700",
      fuel: "Gasolina",
      year: "2023",
      image:
        zrv,
      featured: true,
    },
        {
      id: 4,
      name: "BMW 320IA 2.0 TB M SPORT A.FLEX/M.SPORT 4P",
      price: 320900,
      km: "17.200",
      fuel: "Flex",
      year: "2024",
      image:
        bmw,
      featured: true,
    },
    {
      id: 5,
      name: "FORD BRONCO SPORT WILDTRAK 2.0 TB 16V AWD AUT",
      price: 168000,
      km: "24.000",
      fuel: "Gasolina",
      year: "2021",
      image:
        bronco,
      featured: true,
    },
    {
      id: 6,
      name: "TOYOTA HILUX SW4 SRX PLAT. 4X4 2.8 TB DIE. AUT",
      price: 389900,
      km: "0",
      fuel: "Diesel",
      year: "2025",
      image:
        sw4,
      featured: true,
    },

  ]

  return (
    <div>
      {/* Hero Section com imagem e overlay preto */}
      <section
        style={{
          height: "100vh",
          backgroundImage: `url(${heroIbiza})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--white)",
        }}
      >
        {/* Camada preta transparente */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Conteúdo por cima do overlay */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "800",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
              }}
            >
              Ibiza Veículos
            </h1>
            <p
              style={{
                fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                marginBottom: "3rem",
                fontWeight: "400",
                opacity: "0.9",
              }}
            >
              Desde 1992 realizando sonhos com qualidade e confiança
            </p>
          </div>

          {/* Filtro de busca */}
          <div
            className="card"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "2rem",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                color: "var(--gray-800)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Search className="icon" />
              Encontre seu veículo ideal
            </h3>

            <div className="grid grid-4" style={{ gap: "1rem", marginBottom: "1.5rem" }}>
              <select
                className="form-input"
                value={searchFilters.marca}
                onChange={(e) => setSearchFilters({ ...searchFilters, marca: e.target.value })}
              >
                <option value="">Marca</option>
                <option value="honda">Honda</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="ford">Ford</option>
                <option value="bmw">BMW</option>
              </select>

              <select
                className="form-input"
                value={searchFilters.modelo}
                onChange={(e) => setSearchFilters({ ...searchFilters, modelo: e.target.value })}
              >
                <option value="">Modelo</option>
                <option value="civic">Civic</option>
                <option value="corolla">Corolla</option>
                <option value="jetta">Jetta</option>
                <option value="x3">X3</option>
              </select>

              <select
                className="form-input"
                value={searchFilters.ano}
                onChange={(e) => setSearchFilters({ ...searchFilters, ano: e.target.value })}
              >
                <option value="">Ano</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>

              <button className="btn" style={{ backgroundColor: "#003C85", color: "white" }}>
                <Search className="icon" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Veículos em Destaque</h2>
          <p className="section-subtitle">Selecionamos os melhores veículos com preços especiais para você</p>

          <div className="grid grid-2" style={{ gap: "2rem" }}>
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/estoque" className="btn" style={{ backgroundColor: "#003C85", color: "white" }}>
              <Car className="icon" />
              Ver Todo o Estoque
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="section"
        style={{
          background: "#003C85",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <div className="grid grid-4">
            <div className="stat-card">
              <div className="stat-number" style={{ color: "var(--white)" }}>
                30+
              </div>
              <div className="stat-label" style={{ color: "var(--white)" }}>
                Anos de Experiência
              </div>
              <div className="stat-description" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Tradição no mercado
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number" style={{ color: "var(--white)" }}>
                5000+
              </div>
              <div className="stat-label" style={{ color: "var(--white)" }}>
                Clientes Satisfeitos
              </div>
              <div className="stat-description" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Sonhos realizados
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number" style={{ color: "var(--white)" }}>
                200+
              </div>
              <div className="stat-label" style={{ color: "var(--white)" }}>
                Veículos em Estoque
              </div>
              <div className="stat-description" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Variedade garantida
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number" style={{ color: "var(--white)" }}>
                98%
              </div>
              <div className="stat-label" style={{ color: "var(--white)" }}>
                Taxa de Aprovação
              </div>
              <div className="stat-description" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Satisfação garantida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section" style={{ backgroundColor: "var(--gray-50)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Conheça a Ibiza Veículos</h2>
          <p className="section-subtitle">Descubra nossa história e veja por que somos a melhor escolha</p>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <video
              src={videoFile}
              controls
              poster="https://images.unsplash.com/photo-1562141961-d0a4d2d0d6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
              }}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Visite Nossa Loja</h2>
          <p className="section-subtitle">Uma experiência completa para você encontrar o carro ideal</p>

          <div className="grid grid-2" style={{ gap: "3rem", alignItems: "flex-start" }}>
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl" style={{ marginBottom: "2rem", color: "var(--gray-900)" }}>
                Entre em Contato
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#003C85",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Phone className="icon" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Telefone</h4>
                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#003C85" }}>(34) 3818-7777</p>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#003C85",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <MessageCircle className="icon" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>WhatsApp</h4>
                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#003C85" }}>(34) 99161-0075</p>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#003C85",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <MapPin className="icon" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Endereço</h4>
                    <p style={{ color: "var(--gray-600)", fontSize: "0.875rem" }}>
                      R. Maj. Gote - 1645 - Cônego Getúlio
                      <br />
                      Patos de Minas - MG
                    </p>
                  </div>
                </div>

                <div className="card" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#003C85",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Clock className="icon" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Horário</h4>
                    <p style={{ color: "var(--gray-600)", fontSize: "0.875rem" }}>
                      Segunda à Sexta: 8:00 às 18:00
                      <br />
                      Sábado: 8:00 às 15:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div style={{ paddingTop: "3rem" }}>
              <div
                className="card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.4765437260745!2d-46.514974238027186!3d-18.59772119094512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef534dd6ce9a5%3A0x43a50817fdb9d433!2sIbiza%20Ve%C3%ADculos!5e0!3m2!1spt-BR!2sbr!4v1750822938275!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="540"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home