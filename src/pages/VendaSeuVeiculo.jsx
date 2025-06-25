"use client"

import { useState } from "react"

const VendaSeuVeiculo = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    marca: "",
    modelo: "",
    ano: "",
    km: "",
    valor: "",
    observacoes: "",
  })

  const [photos, setPhotos] = useState([])

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    setPhotos([...photos, ...files])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData, photos)
    alert("Formulário enviado! Entraremos em contato em até 24h.")
  }

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <h1 className="section-title">Quer vender seu carro? Nós compramos!</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Preencha o formulário abaixo e receba uma avaliação justa do seu veículo em até 24 horas
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "var(--light-gray)", padding: "2rem 0" }}>
        <div className="container">
          <div className="grid grid-3">
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "2rem",
                }}
              >
                ⚡
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Avaliação Rápida
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Resposta em até 24 horas</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "2rem",
                }}
              >
                💰
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Melhor Preço
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Avaliação justa e competitiva</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "2rem",
                }}
              >
                🤝
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Processo Simples
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Sem burocracia desnecessária</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="card" style={{ padding: "2.5rem" }}>
              <form onSubmit={handleSubmit}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "2rem",
                    color: "var(--primary-blue)",
                    textAlign: "center",
                  }}
                >
                  Dados Pessoais
                </h2>

                <div className="grid grid-2" style={{ marginBottom: "2rem" }}>
                  <div className="form-group">
                    <label className="form-label">Nome Completo *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Telefone *</label>
                    <input
                      type="tel"
                      className="form-input"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "2rem" }}>
                  <label className="form-label">E-mail *</label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "2rem",
                    color: "var(--primary-blue)",
                    textAlign: "center",
                  }}
                >
                  Dados do Veículo
                </h2>

                <div className="grid grid-2" style={{ marginBottom: "1.5rem" }}>
                  <div className="form-group">
                    <label className="form-label">Marca *</label>
                    <select
                      className="form-input"
                      required
                      value={formData.marca}
                      onChange={(e) => handleInputChange("marca", e.target.value)}
                    >
                      <option value="">Selecione</option>
                      <option value="honda">Honda</option>
                      <option value="toyota">Toyota</option>
                      <option value="volkswagen">Volkswagen</option>
                      <option value="ford">Ford</option>
                      <option value="chevrolet">Chevrolet</option>
                      <option value="fiat">Fiat</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Modelo *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.modelo}
                      onChange={(e) => handleInputChange("modelo", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-3" style={{ marginBottom: "1.5rem" }}>
                  <div className="form-group">
                    <label className="form-label">Ano *</label>
                    <input
                      type="number"
                      className="form-input"
                      required
                      min="1990"
                      max="2024"
                      value={formData.ano}
                      onChange={(e) => handleInputChange("ano", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quilometragem *</label>
                    <input
                      type="number"
                      className="form-input"
                      required
                      placeholder="Ex: 50000"
                      value={formData.km}
                      onChange={(e) => handleInputChange("km", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Valor Desejado</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 50.000"
                      value={formData.valor}
                      onChange={(e) => handleInputChange("valor", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: "2rem" }}>
                  <label className="form-label">Fotos do Veículo</label>
                  <input type="file" className="form-input" multiple accept="image/*" onChange={handlePhotoUpload} />
                  <p style={{ fontSize: "0.875rem", color: "var(--text-gray)", marginTop: "0.5rem" }}>
                    Adicione fotos da frente, traseira, laterais e interior do veículo
                  </p>
                  {photos.length > 0 && (
                    <p style={{ fontSize: "0.875rem", color: "var(--primary-blue)", marginTop: "0.5rem" }}>
                      {photos.length} foto(s) selecionada(s)
                    </p>
                  )}
                </div>

                <div className="form-group" style={{ marginBottom: "2rem" }}>
                  <label className="form-label">Observações</label>
                  <textarea
                    className="form-input"
                    rows="4"
                    placeholder="Descreva o estado do veículo, acessórios, histórico de manutenção, etc."
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange("observacoes", e.target.value)}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="btn btn-primary" style={{ minWidth: "250px", fontSize: "1.125rem" }}>
                    Enviar para Avaliação
                  </button>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-gray)", marginTop: "1rem" }}>
                    * Campos obrigatórios
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendaSeuVeiculo
