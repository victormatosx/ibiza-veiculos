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
      icon: "🤝",
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e honestidade.",
    },
    {
      icon: "⭐",
      title: "Qualidade",
      description: "Selecionamos apenas veículos que passam por rigorosa inspeção de qualidade.",
    },
    {
      icon: "💼",
      title: "Profissionalismo",
      description: "Nossa equipe especializada oferece o melhor atendimento do mercado.",
    },
    {
      icon: "🎯",
      title: "Compromisso",
      description: "Comprometidos em realizar o sonho de cada cliente com dedicação total.",
    },
  ]

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <h1 className="section-title">Nossa História</h1>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-gray)",
              fontSize: "1.125rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Há mais de 30 anos no mercado, a Ibiza Veículos se consolidou como referência em venda de veículos usados,
            sempre priorizando a qualidade, confiança e satisfação dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "3rem", alignItems: "center" }}>
            <div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  color: "var(--primary-blue)",
                }}
              >
                Uma Jornada de Sucesso
              </h2>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem", lineHeight: "1.7" }}>
                Fundada em 1992 por uma família apaixonada por automóveis, a Ibiza Veículos nasceu com o propósito de
                democratizar o acesso a veículos de qualidade, oferecendo opções confiáveis e acessíveis para todos os
                perfis de clientes.
              </p>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.125rem", lineHeight: "1.7" }}>
                Ao longo dos anos, construímos uma reputação sólida baseada na transparência, qualidade dos veículos e
                excelência no atendimento. Cada carro que passa por nossas mãos é cuidadosamente selecionado e
                inspecionado.
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: "1.7" }}>
                Hoje, somos uma das concessionárias mais respeitadas da região, com milhares de clientes satisfeitos e
                histórias de sonhos realizados.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Fachada da Ibiza Veículos"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "1.5rem",
                  boxShadow: "var(--shadow)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card" style={{ padding: "2.5rem", textAlign: "center" }}>
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
                🎯
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
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>
                Oferecer veículos de qualidade com transparência e confiança, proporcionando a melhor experiência de
                compra e realizando os sonhos dos nossos clientes.
              </p>
            </div>

            <div className="card" style={{ padding: "2.5rem", textAlign: "center" }}>
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
                👁️
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
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>
                Ser reconhecida como a melhor concessionária de veículos usados da região, referência em qualidade,
                confiança e inovação no atendimento ao cliente.
              </p>
            </div>

            <div className="card" style={{ padding: "2.5rem", textAlign: "center" }}>
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
                💎
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
              <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>
                Transparência, qualidade, confiança, compromisso com o cliente e responsabilidade social são os pilares
                que guiam todas as nossas ações e decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section" style={{ backgroundColor: "var(--light-gray)" }}>
        <div className="container">
          <h2 className="section-title">Nossos Diferenciais</h2>
          <div className="grid grid-2" style={{ gap: "2rem" }}>
            {values.map((value, index) => (
              <div key={index} className="card" style={{ padding: "2rem", display: "flex", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "var(--primary-blue)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {value.icon}
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
                  <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nossa Trajetória</h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "2rem",
                  marginBottom: "3rem",
                  alignItems: "flex-start",
                }}
              >
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
                    fontSize: "1.125rem",
                    flexShrink: 0,
                  }}
                >
                  {item.year}
                </div>
                <div style={{ flex: 1 }}>
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

      {/* CTA Section */}
      <section style={{ backgroundColor: "var(--primary-blue)", color: "var(--white)", padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Visite Nossa Loja!</h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Venha conhecer nossa história de perto e descubra por que somos a escolha de milhares de clientes
            satisfeitos.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contato" className="btn btn-secondary">
              Entre em Contato
            </a>
            <a href="/estoque" className="btn btn-secondary">
              Ver Estoque
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
