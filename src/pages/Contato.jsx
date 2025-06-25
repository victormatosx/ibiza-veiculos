"use client"

import { useState } from "react"
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, User, MessageSquare, FileText } from "lucide-react"

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Mensagem enviada com sucesso! Retornaremos em breve.")
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" })
  }

  // Estilos modernos para os campos (mesmo padrão das outras páginas)
  const modernInputStyles = {
    width: "100%",
    padding: "16px 20px",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#2d3748",
    backgroundColor: "#ffffff",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "inherit",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  }

  const modernInputFocusStyles = {
    ...modernInputStyles,
    borderColor: "var(--primary-blue)",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-1px)",
  }

  const modernTextareaStyles = {
    ...modernInputStyles,
    minHeight: "120px",
    resize: "vertical",
    paddingTop: "16px",
    paddingBottom: "16px",
  }

  const modernLabelStyles = {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
    letterSpacing: "0.025em",
  }

  const modernButtonStyles = {
    width: "100%",
    padding: "18px 24px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "var(--primary-blue)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  }

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
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
            Estamos aqui para ajudar você a encontrar o veículo perfeito ou esclarecer suas dúvidas
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ backgroundColor: "var(--light-gray)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2.5rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Phone size={32} style={{ color: "var(--primary-blue)" }} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                Telefone
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                (34) 3818-7777
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Seg à Sex: 8h às 18h</p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2.5rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <MessageCircle size={32} style={{ color: "var(--primary-blue)" }} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                WhatsApp
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                (34) 99161-0075
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Atendimento 24h</p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2.5rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Mail size={32} style={{ color: "var(--primary-blue)" }} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}
              >
                E-mail
              </h3>
              <p style={{ color: "var(--text-gray)", marginBottom: "0.5rem", fontSize: "1.1rem", fontWeight: "600" }}>
                contato@ibizaveiculos.com.br
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--text-gray)" }}>Resposta em até 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem", alignItems: "start" }}>
            {/* Contact Form */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "3rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2rem",
                  padding: "16px 0",
                  borderBottom: "2px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "16px",
                  }}
                >
                  <MessageSquare size={24} style={{ color: "var(--primary-blue)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--primary-blue)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: 0,
                  }}
                >
                  Envie sua Mensagem
                </h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "24px" }}>
                  <label style={modernLabelStyles}>
                    <User size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    style={focusedField === "nome" ? modernInputFocusStyles : modernInputStyles}
                    required
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    onFocus={() => setFocusedField("nome")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={modernLabelStyles}>
                    <Mail size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                    E-mail *
                  </label>
                  <input
                    type="email"
                    style={focusedField === "email" ? modernInputFocusStyles : modernInputStyles}
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={modernLabelStyles}>
                    <FileText size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                    Assunto *
                  </label>
                  <select
                    style={focusedField === "assunto" ? modernInputFocusStyles : modernInputStyles}
                    required
                    value={formData.assunto}
                    onChange={(e) => handleInputChange("assunto", e.target.value)}
                    onFocus={() => setFocusedField("assunto")}
                    onBlur={() => setFocusedField("")}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre veículo</option>
                    <option value="financiamento">Financiamento</option>
                    <option value="venda">Venda de veículo</option>
                    <option value="agendamento">Agendamento de visita</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label style={modernLabelStyles}>
                    <MessageSquare size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                    Mensagem *
                  </label>
                  <textarea
                    style={
                      focusedField === "mensagem"
                        ? modernTextareaStyles
                        : { ...modernTextareaStyles, borderColor: "#e2e8f0" }
                    }
                    rows="5"
                    required
                    placeholder="Digite sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                    onFocus={() => setFocusedField("mensagem")}
                    onBlur={() => setFocusedField("")}
                  />
                </div>

                <button
                  type="submit"
                  style={modernButtonStyles}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2563eb"
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "var(--primary-blue)"
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Location Info and Map */}
            <div>
              {/* Location Info */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  marginBottom: "2rem",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    padding: "12px 0",
                    borderBottom: "2px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "12px",
                    }}
                  >
                    <MapPin size={20} style={{ color: "var(--primary-blue)" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      color: "var(--primary-blue)",
                      margin: 0,
                    }}
                  >
                    Nossa Localização
                  </h3>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1rem" }}>
                    <MapPin size={20} style={{ color: "var(--primary-blue)", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontWeight: "600", color: "#374151", marginBottom: "4px" }}>Endereço:</p>
                      <p style={{ color: "var(--text-gray)", lineHeight: "1.5" }}>
                        R. Maj. Gote - 1645 - Cônego Getúlio
                        <br />
                        Patos de Minas - MG, 38700-207
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <Clock size={20} style={{ color: "var(--primary-blue)", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <p style={{ fontWeight: "600", color: "#374151", marginBottom: "4px" }}>
                        Horário de Funcionamento:
                      </p>
                      <p style={{ color: "var(--text-gray)", lineHeight: "1.5" }}>
                        Segunda à Sexta: 8:00 às 18:00
                        <br />
                        Sábado: 8:00 às 15:00
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f1f5f9",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.624590323549!2d-46.51751583976441!3d-18.600793203840446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef534dd6ce9a5%3A0x43a50817fdb9d433!2sIbiza%20Ve%C3%ADculos!5e0!3m2!1spt-BR!2sbr!4v1750857931978!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Ibiza Veículos"
                ></iframe>
                <div style={{ padding: "1rem", textAlign: "center", backgroundColor: "#f8fafc" }}>
                  <p style={{ color: "var(--text-gray)", fontSize: "0.875rem", margin: 0 }}>
                    📍 Clique no mapa para abrir no Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#003C85", color: "var(--white)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Visite Nossa Loja</h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "2.5rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            Venha conhecer nosso showroom e encontre o carro dos seus sonhos. Nossa equipe está pronta para atendê-lo!
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:1134567890"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                backgroundColor: "#ffffff",
                color: "var(--primary-blue)",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
            >
              <Phone size={20} />
              Ligar Agora
            </a>
            <a
              href="https://wa.me/5511999999999"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                backgroundColor: "#22c55e",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "16px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                e.target.style.backgroundColor = "#16a34a"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                e.target.style.backgroundColor = "#22c55e"
              }}
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
