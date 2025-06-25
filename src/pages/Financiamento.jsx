"use client"

import { useState } from "react"
import {
  Shield,
  Zap,
  CreditCard,
  Building2,
  Send,
  Car,
  User,
  Phone,
  Calendar,
  MapPin,
  Mail,
  FileText,
} from "lucide-react"
import banner from "../assets/banner.png"

const Financiamento = () => {
  const [formData, setFormData] = useState({
    // Dados do veículo
    descricaoVeiculo: "",

    // Dados pessoais
    cpf: "",
    nomeCompleto: "",
    dataNascimento: "",
    nomeMae: "",
    cidade: "",

    // Dados para contato
    email: "",
    telefone: "",
  })

  const [focusedField, setFocusedField] = useState("")

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Financing form submitted:", formData)
    alert("Solicitação enviada com sucesso! Entraremos em contato em breve.")
  }

  const banks = [
    { name: "Banco do Brasil", icon: Building2 },
    { name: "Caixa Econômica", icon: Building2 },
    { name: "Itaú", icon: Building2 },
    { name: "Bradesco", icon: Building2 },
    { name: "Santander", icon: Building2 },
  ]

  // Estilos modernos para os campos
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

  const sectionHeaderStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
    padding: "16px 0",
    borderBottom: "2px solid #f1f5f9",
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
            Solicite uma simulação de financiamento
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
            Envie seus dados para simularmos um financiamento. Em breve retornaremos o contato.
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
                <Shield size={32} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Segurança
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Dados protegidos e processo seguro</p>
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
                <Zap size={32} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Aprovação Rápida
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Resposta em até 2 horas</p>
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
                <CreditCard size={32} />
              </div>
              <h3
                style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary-blue)" }}
              >
                Parcelas Acessíveis
              </h3>
              <p style={{ color: "var(--text-gray)" }}>Até 60x para pagar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
                {/* Veículo de Interesse */}
                <div style={{ marginBottom: "3rem" }}>
                  <div style={sectionHeaderStyles}>
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
                      Veículo de Interesse
                    </h3>
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <textarea
                      style={
                        focusedField === "descricaoVeiculo"
                          ? modernTextareaStyles
                          : { ...modernTextareaStyles, borderColor: "#e2e8f0" }
                      }
                      rows="4"
                      required
                      placeholder="Descreva detalhadamente o veículo desejado (marca, modelo, ano), valor estimado, condições de financiamento (entrada, número de parcelas), possibilidade de troca, etc."
                      value={formData.descricaoVeiculo}
                      onChange={(e) => handleInputChange("descricaoVeiculo", e.target.value)}
                      onFocus={() => setFocusedField("descricaoVeiculo")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>

                {/* Dados Pessoais */}
                <div style={{ marginBottom: "3rem" }}>
                  <div style={sectionHeaderStyles}>
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                    <div>
                      <label style={modernLabelStyles}>
                        <FileText size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        CPF *
                      </label>
                      <input
                        type="text"
                        style={focusedField === "cpf" ? modernInputFocusStyles : modernInputStyles}
                        required
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => handleInputChange("cpf", e.target.value)}
                        onFocus={() => setFocusedField("cpf")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>

                    <div>
                      <label style={modernLabelStyles}>
                        <Calendar size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                        Data de Nascimento *
                      </label>
                      <input
                        type="date"
                        style={focusedField === "dataNascimento" ? modernInputFocusStyles : modernInputStyles}
                        required
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                        onFocus={() => setFocusedField("dataNascimento")}
                        onBlur={() => setFocusedField("")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "nomeCompleto" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Digite seu nome completo"
                      value={formData.nomeCompleto}
                      onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                      onFocus={() => setFocusedField("nomeCompleto")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={modernLabelStyles}>
                      <User size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                      Nome Completo da Mãe *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "nomeMae" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Digite o nome completo da sua mãe"
                      value={formData.nomeMae}
                      onChange={(e) => handleInputChange("nomeMae", e.target.value)}
                      onFocus={() => setFocusedField("nomeMae")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>

                  <div>
                    <label style={modernLabelStyles}>
                      <MapPin size={16} style={{ marginRight: "8px", color: "var(--primary-blue)" }} />
                      Cidade *
                    </label>
                    <input
                      type="text"
                      style={focusedField === "cidade" ? modernInputFocusStyles : modernInputStyles}
                      required
                      placeholder="Ex: São Paulo - SP"
                      value={formData.cidade}
                      onChange={(e) => handleInputChange("cidade", e.target.value)}
                      onFocus={() => setFocusedField("cidade")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                </div>

                {/* Dados para Contato */}
                <div style={{ marginBottom: "3rem" }}>
                  <div style={sectionHeaderStyles}>
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
                      <Phone size={24} style={{ color: "var(--primary-blue)" }} />
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
                      Dados para Contato
                    </h3>
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
                        Telefone (WhatsApp) *
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
                  Enviar Dados
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Financiamento
