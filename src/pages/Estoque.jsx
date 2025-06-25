"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react"
import VehicleCard from "../components/VehicleCard"

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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      name: "Hyundai HB20 2020",
      price: 48000,
      km: "42.000",
      fuel: "Flex",
      year: "2020",
      color: "Branco",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
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
      id: 8,
      name: "Audi A4 2021",
      price: 150000,
      km: "38.000",
      fuel: "Flex",
      year: "2021",
      color: "Prata",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 9,
      name: "Mercedes C180 2020",
      price: 165000,
      km: "41.000",
      fuel: "Flex",
      year: "2020",
      color: "Branco",
      doors: "4",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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

  const activeFiltersCount = Object.values(filters).filter((value) => value !== "").length

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section
        className="section"
        style={{
          paddingTop: "6rem",
          paddingBottom: "2rem",
          background: "var(--gradient-primary)",
          color: "var(--white)",
        }}
      >
        <div className="container">
          <h1 className="section-title" style={{ color: "var(--white)", marginBottom: "1rem" }}>
            Nosso Estoque
          </h1>
          <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Explore nossa seleção completa de veículos premium
          </p>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section style={{ backgroundColor: "var(--gray-50)", padding: "2rem 0" }}>
        <div className="container">
          <div className="card" style={{ padding: "2rem" }}>
            {/* Quick Search */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "var(--gray-900)" }}>Busca Rápida</h3>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  style={{ fontSize: "0.8rem" }}
                >
                  <SlidersHorizontal className="icon" />
                  Filtros Avançados
                  <ChevronDown
                    className="icon"
                    style={{
                      transform: showAdvancedFilters ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {activeFiltersCount > 0 && (
                  <button className="btn btn-outline" onClick={clearFilters} style={{ fontSize: "0.8rem" }}>
                    Limpar ({activeFiltersCount})
                  </button>
                )}
              </div>

              <div className="grid grid-4" style={{ gap: "1rem" }}>
                <select
                  className="form-input"
                  value={filters.marca}
                  onChange={(e) => handleFilterChange("marca", e.target.value)}
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

                <select
                  className="form-input"
                  value={filters.modelo}
                  onChange={(e) => handleFilterChange("modelo", e.target.value)}
                >
                  <option value="">Todos os Modelos</option>
                  <option value="civic">Civic</option>
                  <option value="corolla">Corolla</option>
                  <option value="jetta">Jetta</option>
                  <option value="ka">Ka</option>
                  <option value="onix">Onix</option>
                </select>

                <select
                  className="form-input"
                  value={filters.combustivel}
                  onChange={(e) => handleFilterChange("combustivel", e.target.value)}
                >
                  <option value="">Combustível</option>
                  <option value="flex">Flex</option>
                  <option value="gasolina">Gasolina</option>
                  <option value="diesel">Diesel</option>
                  <option value="eletrico">Elétrico</option>
                  <option value="hibrido">Híbrido</option>
                </select>

                <button className="btn btn-primary">
                  <Search className="icon" />
                  Buscar
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div
                style={{
                  borderTop: "1px solid var(--gray-200)",
                  paddingTop: "2rem",
                  animation: "slideDown 0.3s ease",
                }}
              >
                <h4 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1.5rem", color: "var(--gray-800)" }}>
                  Filtros Avançados
                </h4>

                <div className="grid grid-4" style={{ gap: "1rem", marginBottom: "1.5rem" }}>
                  <div className="form-group">
                    <label className="form-label">Tipo de Veículo</label>
                    <select
                      className="form-input"
                      value={filters.tipo}
                      onChange={(e) => handleFilterChange("tipo", e.target.value)}
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

                  <div className="form-group">
                    <label className="form-label">Cor</label>
                    <select
                      className="form-input"
                      value={filters.cor}
                      onChange={(e) => handleFilterChange("cor", e.target.value)}
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

                  <div className="form-group">
                    <label className="form-label">Número de Portas</label>
                    <select
                      className="form-input"
                      value={filters.portas}
                      onChange={(e) => handleFilterChange("portas", e.target.value)}
                    >
                      <option value="">Qualquer</option>
                      <option value="2">2 Portas</option>
                      <option value="4">4 Portas</option>
                      <option value="5">5 Portas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">KM Máxima</label>
                    <select
                      className="form-input"
                      value={filters.kmMax}
                      onChange={(e) => handleFilterChange("kmMax", e.target.value)}
                    >
                      <option value="">Qualquer KM</option>
                      <option value="20000">Até 20.000 km</option>
                      <option value="50000">Até 50.000 km</option>
                      <option value="100000">Até 100.000 km</option>
                      <option value="150000">Até 150.000 km</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: "1rem" }}>
                  <div className="form-group">
                    <label className="form-label">Preço Mínimo</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 0"
                      value={filters.precoMin}
                      onChange={(e) => handleFilterChange("precoMin", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Preço Máximo</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 500.000"
                      value={filters.precoMax}
                      onChange={(e) => handleFilterChange("precoMax", e.target.value)}
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

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label style={{ fontSize: "0.875rem", color: "var(--gray-600)" }}>Ordenar por:</label>
              <select
                className="form-input"
                style={{ width: "auto", minWidth: "160px" }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "3rem",
              }}
            >
              <button
                className="btn btn-secondary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                style={{
                  opacity: currentPage === 1 ? 0.5 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                Anterior
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`btn ${currentPage === index + 1 ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setCurrentPage(index + 1)}
                  style={{ minWidth: "40px" }}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="btn btn-secondary"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                style={{
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Próxima
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Estoque
