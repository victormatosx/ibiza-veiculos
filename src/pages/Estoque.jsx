"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, ChevronDown, ArrowUp, Car, FileText, Fuel } from "lucide-react"
import VehicleCard from "../components/VehicleCard"
import hilux from "../assets/hilux.jpg"
import ram from "../assets/ram.jpg"
import zrv from "../assets/zrv.jpg"
import bmw from "../assets/bmw.jpg"
import bronco from "../assets/bronco.jpg"
import sw4 from "../assets/sw4.jpg"
import banner from "../assets/banner.png"

const Estoque = () => {
  const [filters, setFilters] = useState({
    marca: "",
    modelo: "",
    tipo: "",
    precoMin: "",
    precoMax: "",
    kmMax: "",
    combustivel: "",
    cor: "",
    portas: "",
  })

  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("relevancia")
  const itemsPerPage = 9

  const vehicles = [
    {
      id: 1,
      name: "TOYOTA HILUX CD GR-S 4X4 2.8 TDI DIES. AUT.",
      price: 295900,
      km: "23.000",
      fuel: "Diesel",
      year: "2023",
      image: hilux,
      featured: true,
    },
    {
      id: 2,
      name: "RAM 2500 LARAMIE 6.7 TDI CD 4X4 DIESEL",
      price: 319900,
      km: "47.880",
      fuel: "Diesel",
      year: "2020",
      image: ram,
      featured: true,
    },
    {
      id: 3,
      name: "HONDA ZR-V TOURING 2.0 16V 5P AUT.",
      price: 169900,
      km: "4.700",
      fuel: "Gasolina",
      year: "2023",
      image: zrv,
      featured: true,
    },
    {
      id: 4,
      name: "BMW 320IA 2.0 TB M SPORT A.FLEX/M.SPORT 4P",
      price: 320900,
      km: "17.200",
      fuel: "Flex",
      year: "2024",
      image: bmw,
      featured: true,
    },
    {
      id: 5,
      name: "FORD BRONCO SPORT WILDTRAK 2.0 TB 16V AWD AUT",
      price: 168000,
      km: "24.000",
      fuel: "Gasolina",
      year: "2021",
      image: bronco,
      featured: true,
    },
    {
      id: 6,
      name: "TOYOTA HILUX SW4 SRX PLAT. 4X4 2.8 TB DIE. AUT",
      price: 389900,
      km: "0",
      fuel: "Diesel",
      year: "2025",
      image: sw4,
      featured: true,
    },
    {
      id: 7,
      name: "Honda Civic 2020",
      price: 85000,
      km: "45.000",
      fuel: "Flex",
      year: "2020",
      color: "Prata",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      name: "Toyota Corolla 2021",
      price: 95000,
      km: "32.000",
      fuel: "Flex",
      year: "2021",
      color: "Branco",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 9,
      name: "Volkswagen Jetta 2019",
      price: 78000,
      km: "58.000",
      fuel: "Flex",
      year: "2019",
      color: "Preto",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 10,
      name: "Ford Ka 2020",
      price: 45000,
      km: "35.000",
      fuel: "Flex",
      year: "2020",
      color: "Vermelho",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 11,
      name: "Chevrolet Onix 2021",
      price: 55000,
      km: "28.000",
      fuel: "Flex",
      year: "2021",
      color: "Azul",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 12,
      name: "Hyundai HB20 2020",
      price: 48000,
      km: "42.000",
      fuel: "Flex",
      year: "2020",
      color: "Branco",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 13,
      name: "BMW X3 2022",
      price: 180000,
      km: "25.000",
      fuel: "Flex",
      year: "2022",
      color: "Preto",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 14,
      name: "Audi A4 2021",
      price: 150000,
      km: "38.000",
      fuel: "Flex",
      year: "2021",
      color: "Prata",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 15,
      name: "Mercedes C180 2020",
      price: 165000,
      km: "41.000",
      fuel: "Flex",
      year: "2020",
      color: "Branco",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  const totalPages = Math.ceil(vehicles.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentVehicles = vehicles.slice(startIndex, startIndex + itemsPerPage)

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value })
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      marca: "",
      modelo: "",
      tipo: "",
      precoMin: "",
      precoMax: "",
      kmMax: "",
      combustivel: "",
      cor: "",
      portas: "",
    })
    setCurrentPage(1)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    scrollToTop()
  }

  const activeFiltersCount = Object.values(filters).filter((value) => value !== "").length

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section
        className="section"
        style={{
          paddingTop: "6rem",
          paddingBottom: "2rem",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "var(--white)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="section-title" style={{ color: "var(--white)", marginBottom: "1rem" }}>
            Nosso Estoque
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Explore nossa seleção completa de veículos premium
          </p>
        </div>
      </section>

      {/* Enhanced Filters - Redesigned */}
      <section style={{ backgroundColor: "#f8fafc", padding: "2rem 0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Filter Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1e293b",
                  margin: 0,
                }}
              >
                Encontre seu veículo ideal
              </h3>
            </div>

            {/* Quick Search - Centralized */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                <div style={{ position: "relative" }}>
                  <Car
                    size={16}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#64748b",
                      zIndex: 1,
                    }}
                  />
                  <select
                    style={{
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      backgroundColor: "white",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    value={filters.marca}
                    onChange={(e) => handleFilterChange("marca", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">Todas as Marcas</option>
                    <option value="honda">Honda</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="ford">Ford</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="bmw">BMW</option>
                    <option value="audi">Audi</option>
                    <option value="mercedes">Mercedes-Benz</option>
                  </select>
                </div>

                <div style={{ position: "relative" }}>
                  <FileText
                    size={16}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#64748b",
                      zIndex: 1,
                    }}
                  />
                  <select
                    style={{
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      backgroundColor: "white",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    value={filters.modelo}
                    onChange={(e) => handleFilterChange("modelo", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">Todos os Modelos</option>
                    <option value="civic">Civic</option>
                    <option value="corolla">Corolla</option>
                    <option value="jetta">Jetta</option>
                    <option value="ka">Ka</option>
                    <option value="onix">Onix</option>
                  </select>
                </div>

                <div style={{ position: "relative" }}>
                  <Fuel
                    size={16}
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#64748b",
                      zIndex: 1,
                    }}
                  />
                  <select
                    style={{
                      padding: "0.75rem 1rem 0.75rem 2.5rem",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      backgroundColor: "white",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    value={filters.combustivel}
                    onChange={(e) => handleFilterChange("combustivel", e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                    onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                  >
                    <option value="">Combustível</option>
                    <option value="flex">Flex</option>
                    <option value="gasolina">Gasolina</option>
                    <option value="diesel">Diesel</option>
                    <option value="eletrico">Elétrico</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
                </div>

                <button
                  style={{
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#003C85",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#002a5c")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#003C85")}
                >
                  <Search size={16} />
                  Buscar
                </button>
              </div>
            </div>

            {/* Filter Controls - Centralized */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: showAdvancedFilters ? "#003C85" : "#f1f5f9",
                  color: showAdvancedFilters ? "white" : "#64748b",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                onMouseEnter={(e) => {
                  if (!showAdvancedFilters) {
                    e.target.style.backgroundColor = "#e2e8f0"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!showAdvancedFilters) {
                    e.target.style.backgroundColor = "#f1f5f9"
                  }
                }}
              >
                <SlidersHorizontal size={16} />
                Filtros Avançados
                <ChevronDown
                  size={16}
                  style={{
                    transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {activeFiltersCount > 0 && (
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fef2f2",
                    color: "#dc2626",
                    border: "1px solid #fecaca",
                    borderRadius: "6px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onClick={clearFilters}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#fee2e2")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#fef2f2")}
                >
                  Limpar Filtros ({activeFiltersCount})
                </button>
              )}
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid #e2e8f0",
                  animation: "slideDown 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1rem",
                    maxWidth: "1000px",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tipo de Veículo
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      value={filters.tipo}
                      onChange={(e) => handleFilterChange("tipo", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">Todos os Tipos</option>
                      <option value="sedan">Sedan</option>
                      <option value="hatch">Hatchback</option>
                      <option value="suv">SUV</option>
                      <option value="pickup">Pickup</option>
                      <option value="coupe">Coupé</option>
                      <option value="conversivel">Conversível</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Cor
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      value={filters.cor}
                      onChange={(e) => handleFilterChange("cor", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">Todas as Cores</option>
                      <option value="branco">Branco</option>
                      <option value="preto">Preto</option>
                      <option value="prata">Prata</option>
                      <option value="vermelho">Vermelho</option>
                      <option value="azul">Azul</option>
                      <option value="cinza">Cinza</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Número de Portas
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      value={filters.portas}
                      onChange={(e) => handleFilterChange("portas", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">Qualquer</option>
                      <option value="2">2 Portas</option>
                      <option value="4">4 Portas</option>
                      <option value="5">5 Portas</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      KM Máxima
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                      value={filters.kmMax}
                      onChange={(e) => handleFilterChange("kmMax", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    >
                      <option value="">Qualquer KM</option>
                      <option value="20000">Até 20.000 km</option>
                      <option value="50000">Até 50.000 km</option>
                      <option value="100000">Até 100.000 km</option>
                      <option value="150000">Até 150.000 km</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Preço Mínimo
                    </label>
                    <input
                      type="number"
                      placeholder="R$ 0"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      value={filters.precoMin}
                      onChange={(e) => handleFilterChange("precoMin", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Preço Máximo
                    </label>
                    <input
                      type="number"
                      placeholder="R$ 500.000"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                      value={filters.precoMax}
                      onChange={(e) => handleFilterChange("precoMax", e.target.value)}
                      onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                      onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p style={{ color: "var(--gray-600)", fontSize: "0.875rem" }}>
                Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, vehicles.length)} de {vehicles.length}{" "}
                veículos
              </p>
              {activeFiltersCount > 0 && (
                <p style={{ color: "var(--primary-blue)", fontSize: "0.875rem", fontWeight: "500" }}>
                  {activeFiltersCount} filtro(s) aplicado(s)
                </p>
              )}
            </div>

            {/* Improved Sort Dropdown */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: "white",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              }}
            >
              <label
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                Ordenar por:
              </label>
              <select
                style={{
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  backgroundColor: "white",
                  color: "#374151",
                  outline: "none",
                  cursor: "pointer",
                  minWidth: "160px",
                  fontWeight: "500",
                }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "#003C85")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              >
                <option value="relevancia">Relevância</option>
                <option value="menor-preco">Menor Preço</option>
                <option value="maior-preco">Maior Preço</option>
                <option value="menor-km">Menor KM</option>
                <option value="mais-novo">Mais Novo</option>
                <option value="marca">Marca A-Z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-3">
            {currentVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "3rem",
                padding: "2rem 0",
              }}
            >
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: currentPage === 1 ? "#f1f5f9" : "#003C85",
                  color: currentPage === 1 ? "#94a3b8" : "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                onMouseEnter={(e) => {
                  if (currentPage !== 1) {
                    e.target.style.backgroundColor = "#002a5c"
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 1) {
                    e.target.style.backgroundColor = "#003C85"
                  }
                }}
              >
                Anterior
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  style={{
                    minWidth: "40px",
                    height: "40px",
                    backgroundColor: currentPage === index + 1 ? "#003C85" : "white",
                    color: currentPage === index + 1 ? "white" : "#374151",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onClick={() => handlePageChange(index + 1)}
                  onMouseEnter={(e) => {
                    if (currentPage !== index + 1) {
                      e.target.style.backgroundColor = "#f8fafc"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== index + 1) {
                      e.target.style.backgroundColor = "white"
                    }
                  }}
                >
                  {index + 1}
                </button>
              ))}

              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: currentPage === totalPages ? "#f1f5f9" : "#003C85",
                  color: currentPage === totalPages ? "#94a3b8" : "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                onMouseEnter={(e) => {
                  if (currentPage !== totalPages) {
                    e.target.style.backgroundColor = "#002a5c"
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== totalPages) {
                    e.target.style.backgroundColor = "#003C85"
                  }
                }}
              >
                Próxima
              </button>
            </div>
          )}

          {/* Scroll to Top Button */}
          <div
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 1000,
            }}
          >
            <button
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#003C85",
                color: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s ease",
                outline: "none",
              }}
              onClick={scrollToTop}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#002a5c"
                e.target.style.transform = "scale(1.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#003C85"
                e.target.style.transform = "scale(1)"
              }}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Estoque
