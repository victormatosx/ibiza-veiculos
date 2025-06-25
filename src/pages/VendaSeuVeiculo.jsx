"use client"

import { useState } from "react"
import {
  Zap,
  DollarSign,
  Handshake,
  Send,
  User,
  Mail,
  Phone,
  Car,
  Palette,
  Gauge,
  Calendar,
  Settings,
  Hash,
} from "lucide-react"
import banner from "../assets/banner.png"

const VendaSeuVeiculo = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    marca: "",
    modelo: "",
    versao: "",
    cor: "",
    km: "",
    placa: "",
    anoModelo: "",
    opcionais: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Vehicle sale form submitted:", formData)
    alert("Solicitação enviada com sucesso! Entraremos em contato em breve para avaliar seu veículo.")
  }

  // Estilos modernos para os campos (mesmo padrão da página de financiamento)
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
      {/* Header Banner */}
      <section
        className="section"
        style={{
          paddingTop: "6rem",
          paddingBottom: "2rem",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* Overlay escuro */}
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
          <h1 className="section-title" style={{ color: "#fff" }}>
            Solicite uma avaliação do seu veículo
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "1rem auto",
              color: "#fff",
            }}
          >
            Envie para nossa equipe os dados do seu veículo para fazermos uma proposta. Em breve retornaremos o contato.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "var(--light-gray)", padding: "2rem 0", paddingTop: "100px" }}>
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
                  color: "var(--white)",
                }}
              >
                <Zap size={32} />
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
                  color: "var(--white)",
                }}
              >
                <DollarSign size={32} />
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
                  color: "var(--white)",
                }}
              >
                <Handshake size={32} />
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

      {/* Vehicle Evaluation Form */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "3rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                border: "1px solid #f1f5f9",
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Dados Pessoais */}
                <div style={{ marginBottom: "3rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "24px",
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
                      <User size={24} style={{ color: "var(--primary-blue)" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "var(--primary-blue)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        margin: 0,
                      }}
                    >
                      Dados Pessoais
                    </h3>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "24px" }}>
                    <div>
                      <label style={modernLabelStyles}>
                        <User size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Nome *
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
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                    <div>
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

                    <div>
                      <label style={modernLabelStyles}>
                        <Phone size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        style={focusedField === "telefone" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        onFocus={() => setFocusedField("telefone")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>
                </div>

                {/* Dados do Veículo */}
                <div style={{ marginBottom: "3rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "24px",
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
                      <Car size={24} style={{ color: "var(--primary-blue)" }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        color: "var(--primary-blue)",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        margin: 0,
                      }}
                    >
                      Dados do Veículo
                    </h3>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                    <div>
                      <label style={modernLabelStyles}>
                        <Car size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Marca *
                      </label>
                      <select
                        style={focusedField === "marca" ? modernInputFocusStyles : modernInputStyles}
                        required
                        value={formData.marca}
                        onChange={(e) => handleInputChange("marca", e.target.value)}
                        onFocus={() => setFocusedField("marca")}
                        onBlur={() => setFocusedField("")}
                      >
                        <option value="">Selecione a marca</option>
                        <option value="honda">Honda</option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="ford">Ford</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="fiat">Fiat</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="nissan">Nissan</option>
                        <option value="renault">Renault</option>
                        <option value="peugeot">Peugeot</option>
                      </select>
                    </div>

                    <div>
                      <label style={modernLabelStyles}>
                        <Car size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Modelo *
                      </label>
                      <input
                        type="text"
                        style={focusedField === "modelo" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="Ex: Civic, Corolla, Golf"
                        value={formData.modelo}
                        onChange={(e) => handleInputChange("modelo", e.target.value)}
                        onFocus={() => setFocusedField("modelo")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                    <div>
                      <label style={modernLabelStyles}>
                        <Settings size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Versão
                      </label>
                      <input
                        type="text"
                        style={focusedField === "versao" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="Ex: EX, XLS, Highline"
                        value={formData.versao}
                        onChange={(e) => handleInputChange("versao", e.target.value)}
                        onFocus={() => setFocusedField("versao")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>

                    <div>
                      <label style={modernLabelStyles}>
                        <Palette size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Cor
                      </label>
                      <input
                        type="text"
                        style={focusedField === "cor" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="Ex: Branco, Prata, Preto"
                        value={formData.cor}
                        onChange={(e) => handleInputChange("cor", e.target.value)}
                        onFocus={() => setFocusedField("cor")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                    <div>
                      <label style={modernLabelStyles}>
                        <Gauge size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        KM *
                      </label>
                      <input
                        type="number"
                        style={focusedField === "km" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="Ex: 50000"
                        value={formData.km}
                        onChange={(e) => handleInputChange("km", e.target.value)}
                        onFocus={() => setFocusedField("km")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>

                    <div>
                      <label style={modernLabelStyles}>
                        <Hash size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Placa
                      </label>
                      <input
                        type="text"
                        style={focusedField === "placa" ? modernInputFocusStyles : modernInputStyles}
                        placeholder="ABC-1234"
                        value={formData.placa}
                        onChange={(e) => handleInputChange("placa", e.target.value)}
                        onFocus={() => setFocusedField("placa")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={modernLabelStyles}>
                      <Calendar size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                      Ano/Modelo *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "anoModelo" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Ex: 2020/2021"
                      value={formData.anoModelo}
                      onChange={(e) => handleInputChange("anoModelo", e.target.value)}
                      onFocus={() => setFocusedField("anoModelo")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div>
                    <label style={modernLabelStyles}>
                      <Settings size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                      Opcionais
                    </label>
                    <textarea
                      style={
                        focusedField === "opcionais"
                          ? modernTextareaStyles
                          : { ...modernTextareaStyles, borderColor: "#e2e8f0" }
                      }
                      rows="4"
                      placeholder="Descreva os opcionais do veículo: ar condicionado, direção hidráulica, vidros elétricos, alarme, som, rodas de liga, etc."
                      value={formData.opcionais}
                      onChange={(e) => handleInputChange("opcionais", e.target.value)}
                      onFocus={() => setFocusedField("opcionais")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
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
                  Solicitar Avaliação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VendaSeuVeiculo
