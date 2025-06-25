"use client"

import { Target, Eye, Gem, Handshake, Star, Briefcase, Users, Award, MapPin } from "lucide-react"
import banner from "../assets/banner.png"
import fachada from "../assets/fachada.png"

const Sobre = () => {
  const timeline = [
    {
      year: "1992",
      title: "Fundação",
      description: "Ibiza Veículos é fundada com o sonho de oferecer os melhores carros usados da região.",
    },
    {
      year: "2000",
      title: "Expansão",
      description: "Ampliação do showroom e início das parcerias com bancos para financiamento.",
    },
    {
      year: "2010",
      title: "Modernização",
      description: "Investimento em tecnologia e criação do primeiro site da empresa.",
    },
    {
      year: "2020",
      title: "Transformação Digital",
      description: "Lançamento da plataforma online completa e serviços digitais.",
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 30 anos realizando sonhos e milhares de clientes satisfeitos.",
    },
  ]

  const values = [
    {
      icon: Handshake,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade.",
      color: "#3b82f6",
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Selecionamos apenas veículos que passam por rigorosa inspeção de qualidade.",
      color: "#f59e0b",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Comprometidos em realizar o sonho de cada cliente com dedicação total.",
      color: "#8b5cf6",
    },
  ]

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
            Nossa História
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.125rem",
              maxWidth: "800px",
              margin: "1rem auto",
              color: "#fff",
              lineHeight: "1.6",
            }}
          >
            Há mais de 30 anos no mercado, a Ibiza Veículos se consolidou como referência em venda de veículos usados,
            sempre priorizando a qualidade, confiança e satisfação dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                  lineHeight: "1.2",
                }}
              >
                Uma Jornada de Sucesso
              </h2>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem", lineHeight: "1.7", color: "#4a5568" }}>
                Fundada em 1992 por uma família apaixonada por automóveis, a Ibiza Veículos nasceu com o propósito de
                democratizar o acesso a veículos de qualidade, oferecendo opções confiáveis e acessíveis para todos os
                perfis de clientes.
              </p>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem", lineHeight: "1.7", color: "#4a5568" }}>
                Ao longo dos anos, construímos uma reputação sólida baseada na transparência, qualidade dos veículos e
                excelência no atendimento. Cada carro que passa por nossas mãos é cuidadosamente selecionado e
                inspecionado.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "#4a5568" }}>
                Hoje, somos uma das concessionárias mais respeitadas da região, com milhares de clientes satisfeitos e
                histórias de sonhos realizados.
              </p>
            </div>
            <div>
              <img
                src={fachada || "/placeholder.svg"}
                alt="Fachada da Ibiza Veículos"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  border: "1px solid #f1f5f9",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: "2rem" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "3rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
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
                <Target size={32} style={{ color: "var(--primary-blue)" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--primary-blue)",
                }}
              >
                Missão
              </h3>
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6", fontSize: "1rem" }}>
                Oferecer veículos de qualidade com transparência e confiança, proporcionando a melhor experiência de
                compra e realizando os sonhos dos nossos clientes.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "3rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
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
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Eye size={32} style={{ color: "#10b981" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--primary-blue)",
                }}
              >
                Visão
              </h3>
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6", fontSize: "1rem" }}>
                Ser reconhecida como a melhor concessionária de veículos usados da região, referência em qualidade,
                confiança e inovação no atendimento ao cliente.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "3rem",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
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
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <Gem size={32} style={{ color: "#8b5cf6" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "var(--primary-blue)",
                }}
              >
                Valores
              </h3>
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6", fontSize: "1rem" }}>
                Transparência, qualidade, confiança, compromisso com o cliente e responsabilidade social são os pilares
                que guiam todas as nossas ações e decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            Nossos Diferenciais
          </h2>
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  display: "flex",
                  gap: "1.5rem",
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
                    width: "70px",
                    height: "70px",
                    backgroundColor: `${value.color}15`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <value.icon size={28} style={{ color: value.color }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      marginBottom: "0.75rem",
                      color: "var(--primary-blue)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: "1.6", fontSize: "1rem" }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            Nossa Trajetória
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "2.5rem",
                  marginBottom: "3rem",
                  alignItems: "flex-start",
                  position: "relative",
                }}
              >
                {/* Linha conectora */}
                {index < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                      top: "80px",
                      width: "2px",
                      height: "60px",
                      backgroundColor: "#e2e8f0",
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "var(--primary-blue)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--white)",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "0.75rem",
                      color: "var(--primary-blue)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-gray)", lineHeight: "1.6", fontSize: "1.125rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section style={{ backgroundColor: "var(--primary-blue)", color: "var(--white)", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-4" style={{ gap: "2rem", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>30+</div>
              <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Anos de Experiência</p>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>5000+</div>
              <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Clientes Satisfeitos</p>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>200+</div>
              <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Veículos por Mês</p>
            </div>
            <div>
              <div style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>98%</div>
              <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>Aprovação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem", color: "var(--primary-blue)" }}>
            Visite Nossa Loja!
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "2.5rem",
              color: "var(--text-gray)",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              lineHeight: "1.6",
            }}
          >
            Venha conhecer nossa história de perto e descubra por que somos a escolha de milhares de clientes
            satisfeitos.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contato"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                backgroundColor: "var(--primary-blue)",
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
                e.target.style.backgroundColor = "#2563eb"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                e.target.style.backgroundColor = "var(--primary-blue)"
              }}
            >
              <MapPin size={20} />
              Entre em Contato
            </a>
            <a
              href="/estoque"
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
                border: "2px solid var(--primary-blue)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                e.target.style.backgroundColor = "var(--primary-blue)"
                e.target.style.color = "#ffffff"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                e.target.style.backgroundColor = "#ffffff"
                e.target.style.color = "var(--primary-blue)"
              }}
            >
              <Award size={20} />
              Ver Estoque
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
