import type { Metadata } from "next";
import { headers } from "next/headers";
import { ScrollReveal } from "../scroll-reveal";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.webp`;
  const title = "Sua Técnica no Pódio | Maria Lisboa";
  const description = "Mentoria presencial de extensão de cílios com Maria Lisboa.";

  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: image, width: 1536, height: 896, alt: "Sua Técnica no Pódio — Maria Lisboa" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const asset = (name: string) => `/assets/${name}`;
const whatsapp = "https://wa.me/5535997458386";

const curriculum = [
  ["Clássico Fio a Fio", "a826c316-12df-4115-ac6d-f2b6f617ee02.svg"],
  ["Delineado Gráfico", "249a4f61-35d3-4911-a21a-2acb795bda2d.svg"],
  ["Visagismo avançado", "fef8b051-f2d3-4825-a690-25203465a2fb.svg"],
  ["Mapeamentos e como utilizar", "2e4a55de-fa4c-4bc2-a3ee-715f5d34c1a8.svg"],
  ["Curvaturas e Transições", "07bd10f8-b113-4ac5-8fd8-bddf8ff688ae.svg"],
  ["Top Line e Camadas", "9efaf5f1-7e93-4ba7-b6c5-c37291fade09.svg"],
  ["Preenchimento", "61c4322a-1216-43de-b28c-7a1a00b4c9b5.svg"],
  ["Acoplagem perfeita e posicionamento da base", "6dd805f5-40c8-44ba-aca7-9cb75c1c98f1.svg"],
  ["Isolar sem perder o direcionamento", "1da54c15-22eb-4f76-b8db-3d663a5fa6bf.svg"],
  ["Princípios para uma boa durabilidade", "4dad84dd-33f0-4ec3-b2cc-b78f7edd6259.svg"],
  ["ADD — Alinhamento / Direcionamento / Distanciamento", "7b7de7e3-665c-4809-8e95-7d66c0acbd2a.svg"],
  ["Canto interno e externo", "3f47f7ae-c691-41b4-ab4d-cc78d23df902.svg"],
  ["Critérios de campeonato para o atendimento comercial", "84367b32-c59e-4877-993f-b8f915b051b3.svg"],
  ["Como ter uma mentalidade de sucesso", "9978c5a3-2b9f-4743-965c-d66bb7dc28ff.svg"],
  ["Produção de Modelo", "470d7c36-c279-4285-850c-0873a48eea38.svg"],
  ["Efeitos Tendências", "a692fe00-f977-443a-9e3e-5e76cc538925.svg"],
  ["Efeito Árabe", "02a737c5-7996-41e6-8bf4-324927bd9565.svg"],
  ["Natural Arabic Effect", "05553677-e223-407a-8120-b62e0286370c.svg"],
  ["Efeito Laminado", "9e2db88d-9a37-4f83-8caa-b37dfdaea097.svg"],
  ["Efeito Suave", "a9109158-1c09-4f64-b48e-48ea70137210.svg"],
  ["Análise do Fio Natural", "37260c49-add7-4033-85e7-bb3165e339dd.svg"],
  ["Bônus extras", "ffc4c8eb-0211-4ad8-b53f-71495c65316c.svg"],
];

const resultImages = [
  "result-figma-01.webp",
  "result-figma-02.webp",
  "result-figma-03.webp",
  "result-figma-04.webp",
  "result-figma-05.webp",
  "result-figma-06.webp",
  "result-figma-07.webp",
  "result-figma-08.webp",
  "result-figma-09.webp",
];

const testimonialFramedImages = [
  "testimonial-framed-01.webp",
  "testimonial-framed-02.webp",
  "testimonial-framed-03.webp",
  "testimonial-framed-04.webp",
  "testimonial-framed-05.webp",
  "testimonial-framed-06.webp",
];

const differenceCards = [
  ["Acompanhamento exclusivo", "Suporte direto com a mentora durante todo o processo.", "27254970-adae-41ff-9961-f17443b7539d.svg"],
  ["Método validado", "Testado e validado em campeonatos internacionais, já levou mais de 25 alunas ao pódio.", "b3456067-52d2-48cf-9359-e306b7203a8e.svg"],
  ["Certificação internacional", "Reconhecimento que abre portas no mercado global.", "2b3365c9-85a4-4e4c-bc84-e1bd9045549a.svg"],
  ["Extras", "Curso online com conteúdos extras incríveis.", "8400f8f9-9455-49f3-9f18-639c49a1b7ca.svg"],
  ["Material completo", "Apostila, guias e checklist para dominar cada etapa.", "efd80f7e-c47b-4d5b-9452-63cba3e96b2c.svg"],
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__visual" aria-hidden="true">
          <img className="hero__texture" src={asset("hero-textura.webp")} alt="" />
          <img className="hero__halo hero__halo--left" src={asset("hero-halo.svg")} alt="" />
          <img className="hero__portrait" src={asset("hero-maria.webp")} alt="" />
          <div className="hero__photos">
            <span><img src={asset("hero-olho-1.webp")} alt="" /></span>
            <span><img src={asset("hero-olho-2.webp")} alt="" /></span>
          </div>
          <img className="hero__light" src={asset("hero-luz.webp")} alt="" />
          <img className="hero__glow hero__glow--top" src={asset("hero-glow-top.svg")} alt="" />
          <img className="hero__glow hero__glow--bottom" src={asset("hero-glow-bottom.svg")} alt="" />
        </div>
        <div className="hero__content" data-reveal="left">
          <h1 className="brand-title" id="hero-title" aria-label="Sua Técnica no Pódio com Maria Lisboa"><span>Sua Técnica no</span><strong>Pódio</strong></h1>
          <p className="hero__lead">Eleve o nível da sua técnica com critérios de campeonato aplicados ao seu atendimento comercial. <strong>Aprenda o método e se destaque!</strong></p>
          <p className="hero__note">Uma imersão de 1 dia com Maria Lisboa, multicampeã, jurada e mentora, com selo de formação internacional.</p>
          <ul className="hero__badges"><li>Método próprio com critérios de campeonato</li><li>Certificação internacional</li></ul>
          <a className="whatsapp-button whatsapp-button--hero" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">Chamar no WhatsApp</a>
        </div>
      </section>

      <section className="manifesto"><p><strong>Acredito que excelência técnica, constância e amor pelo que fazemos são o que nos levam além.</strong> E é exatamente esse conhecimento que quero compartilhar com você nesta mentoria.</p></section>

      <section className="about section-fixed">
        <div className="about__word" aria-hidden="true">MARIA LISBOA</div>
        <img className="about__portrait" data-reveal="left" src={asset("d3032cbc-8863-4eb7-a257-0e28b04c64f7.webp")} alt="Maria Lisboa" />
        <div className="about__copy" data-reveal="right">
          <p className="eyebrow">Quem sou eu?</p><h2>Maria Lisboa</h2><span className="line" />
          <p>Eu sou a Maria Lisboa, referência em Clássico Fio a Fio e Efeitos Naturais. Atuo há mais de 5 anos no mercado e atualmente sou mentora com selo de formação internacional, jurada e palestrante.</p>
          <p>Com certificações nacionais e internacionais, me tornei multicampeã em grandes campeonatos do Brasil e do mundo, com destaque para o Grand Prix do Interlash e o 1º lugar em um evento presencial na Itália, em 2025.</p>
          <p>Ao longo dos anos, desenvolvi um método próprio baseado em critérios de campeonato. Esse método me levou ao pódio e hoje forma profissionais em todo o Brasil, elevando o nível técnico de quem busca excelência e padrões de campeonato.</p>
        </div>
      </section>

      <section className="curriculum section-fixed">
        <header className="section-heading" data-reveal="up"><h2>Tudo o que você vai <em>dominar</em></h2><p>Da base técnica ao posicionamento comercial: um programa completo<br />construído sobre critérios de campeonato.</p><span className="line" /></header>
        <div className="curriculum__grid">
          {curriculum.map(([label, icon]) => <div className="curriculum__item" data-reveal="up" key={label}><span><img src={asset(icon)} alt="" /></span><p>{label}</p></div>)}
        </div>
      </section>

      <section className="results section-fixed">
        <header className="section-heading" data-reveal="up"><h2>Resultados reais de alunas</h2><span className="line" /></header>
        <div className="results__grid">
          {resultImages.map((src, index) => <div className="results__card" data-reveal="up" key={src}><img src={asset(src)} alt={`Resultado de aluna ${index + 1}`} /></div>)}
        </div>
      </section>

      <section className="schedule section-fixed">
        <div className="schedule__panel" data-reveal="up">
          <header className="section-heading section-heading--light"><h2>1 dia intensivo de <em>muito conhecimento</em></h2><span className="line" /></header>
          <div className="schedule__grid">
            {[
              ["08:00 — 13:00", "Manhã", "Fundamentos técnicos, mapeamentos, curvaturas e a base do método de campeonato.", "dd73a206-db3d-461d-9b32-d57567184346.svg"],
              ["13:00", "Pausa para o almoço", "Intervalo para descanso antes do bloco prático da tarde.", "9467639a-7583-4337-ae4f-18d012a45bc2.svg"],
              ["14:00 — 19:00", "Tarde", "Aplicação, refinamento, critérios de avaliação e mentalidade de sucesso.", "388b00be-a102-461b-8f38-d5610c98121c.svg"],
            ].map(([time, title, description, icon]) => <article className="schedule__card" data-reveal="up" key={title}><span className="schedule__icon"><img src={asset(icon)} alt="" /></span><p className="schedule__time"><img src={asset("f7399d4f-2c56-4d79-b316-4fe511c64be6.svg")} alt="" />{time}</p><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="difference section-fixed">
        <header className="section-heading" data-reveal="up"><h2>Por que esta formação é <em>diferente</em></h2><span className="line" /></header>
        <div className="difference__grid">{differenceCards.map(([title, description, icon]) => <article className="difference__card" data-reveal="up" key={title}><span><img src={asset(icon)} alt="" /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="testimonials section-fixed">
        <header className="section-heading" data-reveal="up"><h2>O que as alunas <em>enviam</em> depois</h2><p>Mensagens recebidas de alunas que passaram pelas formações e mentorias da Maria Lisboa.</p><span className="line" /></header>
        <div className="testimonials__masonry" data-reveal="up">
          <div className="testimonials__masonry-column">
            {testimonialFramedImages.slice(0, 2).map((src, index) => <img src={asset(src)} alt={`Depoimento de aluna ${index + 1}`} key={src} />)}
          </div>
          <div className="testimonials__masonry-column">
            {testimonialFramedImages.slice(2).map((src, index) => <img src={asset(src)} alt={`Depoimento de aluna ${index + 3}`} key={src} />)}
          </div>
        </div>
      </section>

      <section className="investment section-fixed">
        <header className="section-heading" data-reveal="up"><h2>Um dia que muda o seu <em>patamar técnico</em></h2><span className="line" /></header>
        <div className="investment__card" data-reveal="up"><p className="eyebrow">Atendimento personalizado</p><h3>Consulte valores<br />e condições</h3><p>Fale com nossa equipe no WhatsApp para receber todas as informações e garantir sua vaga.</p><a className="whatsapp-button whatsapp-button--large" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div>
      </section>

      <section className="final-cta section-fixed">
        <div className="final-cta__copy" data-reveal="left">
          <h2>Pronta para<br />subir ao pódio?</h2>
          <p>Garanta sua vaga na formação presencial e leve a sua técnica ao padrão de campeonato, com acompanhamento direto da mentora.</p>
        </div>
        <img className="final-cta__portrait" src={asset("pronta-maria.webp")} alt="Maria Lisboa com seus troféus" />
      </section>

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={asset("logo-sua-tecnica-podio.svg")} alt="Sua Técnica no Pódio" />
            <small>Mentoria de extensão de cílios com Maria Lisboa.</small>
          </div>
          <address className="footer__contact">
            <strong>Contato</strong>
            <span>Rua Prefeito Pedro Moreira Borges, 345, 2º piso —<br />Centro, Estiva, MG</span>
            <a href="tel:+5535997458386">(35) 99745-8386</a>
            <a href="https://www.instagram.com/marialisboaacademy/" target="_blank" rel="noreferrer">@marialisboaacademy</a>
          </address>
          <nav className="footer__links" aria-label="Links institucionais">
            <strong>Institucional</strong>
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Maria Lisboa · Mentoria MLC. Todos os direitos reservados.</p>
          <p>Projeto desenvolvido por <a href="https://www.instagram.com/josielmorais_/" target="_blank" rel="noreferrer">@josielmorais_</a></p>
        </div>
      </footer>
    </main>
  );
}
