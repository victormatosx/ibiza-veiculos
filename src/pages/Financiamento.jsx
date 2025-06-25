"use client"

import { useState } from "react"
import { Shield, Zap, CreditCard, Building2, Send } from "lucide-react"

const Financiamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    renda: "",
    veiculo: "",
    valorVeiculo: "",
    entrada: "",
    parcelas: "48",
    observacoes: "",
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Financing form submitted:", formData)
    alert("Solicitação enviada com sucesso! Entraremos em contato em até 2 horas.")
  }

  const banks = [
    { name: "Banco do Brasil", icon: Building2 },
    { name: "Caixa Econômica", icon: Building2 },
    { name: "Itaú", icon: Building2 },
    { name: "Bradesco", icon: Building2 },
    { name: "Santander", icon: Building2 },
  ]

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
          <h1 className="section-title">Encontre o Melhor Financiamento para Você</h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "1rem auto",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Simule agora e encontre as melhores condições para financiar seu veículo dos sonhos.
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

      {/* Simulation Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: "3rem", alignItems: "start" }}>
            {/* Form */}
            <div className="card" style={{ padding: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                  color: "var(--primary-blue)",
                  textAlign: "center",
                }}
              >
                Dados para Simulação
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
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
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

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">CPF *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={(e) => handleInputChange("cpf", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Renda Mensal *</label>
                    <input
                      type="number"
                      className="form-input"
                      required
                      placeholder="R$ 5.000"
                      value={formData.renda}
                      onChange={(e) => handleInputChange("renda", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Veículo Desejado</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Ex: Honda Civic 2020"
                    value={formData.veiculo}
                    onChange={(e) => handleInputChange("veiculo", e.target.value)}
                  />
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Valor do Veículo *</label>
                    <input
                      type="number"
                      className="form-input"
                      required
                      placeholder="R$ 80.000"
                      value={formData.valorVeiculo}
                      onChange={(e) => handleInputChange("valorVeiculo", e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Valor de Entrada</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="R$ 20.000"
                      value={formData.entrada}
                      onChange={(e) => handleInputChange("entrada", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Número de Parcelas *</label>
                  <select
                    className="form-input"
                    required
                    value={formData.parcelas}
                    onChange={(e) => handleInputChange("parcelas", e.target.value)}
                  >
                    <option value="12">12x</option>
                    <option value="24">24x</option>
                    <option value="36">36x</option>
                    <option value="48">48x</option>
                    <option value="60">60x</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Observações</label>
                  <textarea
                    className="form-input"
                    rows="3"
                    placeholder="Alguma observação adicional?"
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange("observacoes", e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", fontSize: "1.125rem" }}>
                  Enviar Solicitação <Send size={16} style={{ marginLeft: "0.5rem" }} />
                </button>
              </form>
            </div>

            {/* Results */}
            <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "var(--light-gray)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "3rem",
                  color: "var(--primary-blue)",
                }}
              >
                📊
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--primary-blue)",
                }}
              >
                Solicite sua Simulação
              </h3>
              <p style={{ color: "var(--text-gray)" }}>
                Preencha o formulário ao lado para que possamos encontrar as melhores opções de financiamento para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section style={{ backgroundColor: "var(--light-gray)", padding: "3rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--primary-blue)",
            }}
          >
            Bancos Parceiros
          </h2>
          <div className="grid grid-5" style={{ gap: "2rem" }}>
            {banks.map((bank, index) => (
              <div
                key={index}
                className="card"
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "48px",
                  }}
                >
                  <bank.icon size={32} />
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "var(--primary-blue)" }}>{bank.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Financiamento
