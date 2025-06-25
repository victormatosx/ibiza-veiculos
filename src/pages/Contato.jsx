"use client"

import { useState } from "react"

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Mensagem enviada com sucesso! Retornaremos em breve.")
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" })
  }

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <h1 className="section-title">Entre em Contato</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Estamos aqui para ajudar você a encontrar o veículo perfeito
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ backgroundColor: "var(--light-gray)", padding: "3rem 0" }}>
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                📞
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                Telefone
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem" }}>(11) 3456-7890</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Seg à Sex: 8h às 18h</p>
            </div>

            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                💬
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                WhatsApp
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem" }}>(11) 99999-9999</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Atendimento 24h</p>
            </div>

            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "var(--primary-blue)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2rem",
                }}
              >
                ✉️
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                E-mail
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem" }}>contato@ibizaveiculos.com.br</p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Resposta em até 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "3rem", alignItems: "start" }}>
            {/* Contact Form */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                  color: "var(--primary-blue)",
                  textAlign: "center",
                }}
              >
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit}>
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
                  <label className="form-label">E-mail *</label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Assunto *</label>
                  <select
                    className="form-input"
                    required
                    value={formData.assunto}
                    onChange={(e) => handleInputChange("assunto", e.target.value)}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre veículo</option>
                    <option value="financiamento">Financiamento</option>
                    <option value="venda">Venda de veículo</option>
                    <option value="agendamento">Agendamento de visita</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensagem *</label>
                  <textarea
                    className="form-input"
                    rows="5"
                    required
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "1.125rem" }}>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Location Info and Map */}
            <div>
              <div className="card" style={{ padding: "2rem", marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                    color: "var(--primary-blue)",
                  }}
                >
                  Nossa Localização
                </h3>

                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>📍</span>
                    <span>
                      <strong>Endereço:</strong>
                      <br />
                      Rua das Flores, 123 - Centro
                      <br />
                      São Paulo - SP, 01234-567
                    </span>
                  </p>

                  <p style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.25rem" }}>🕒</span>
                    <span>
                      <strong>Horário de Funcionamento:</strong>
                      <br />
                      Segunda à Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 14h
                      <br />
                      Domingo: Fechado
                    </span>
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "var(--light-gray)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-gray)",
                    fontSize: "3rem",
                  }}
                >
                  🗺️
                </div>
                <div style={{ padding: "1rem", textAlign: "center" }}>
                  <p style={{ color: "var(--text-gray)", fontSize: "0.875rem" }}>Mapa interativo do Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "var(--primary-blue)", color: "var(--white)", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>Visite Nossa Loja</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.9 }}>
            Venha conhecer nosso showroom e encontre o carro dos seus sonhos
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:1134567890" className="btn btn-secondary">
              Ligar Agora
            </a>
            <a href="https://wa.me/5511999999999" className="btn btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
