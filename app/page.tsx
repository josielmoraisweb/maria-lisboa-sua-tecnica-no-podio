import type { Metadata } from "next";
import { ScrollReveal } from "./scroll-reveal";

export const metadata: Metadata = {
  title: "Sua Técnica no Pódio | Maria Lisboa",
  description: "Mentoria presencial de extensão de cílios com Maria Lisboa.",
};

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
  "bb2686b2-6d47-42eb-a2d0-c3dfb6973086.webp",
  "200c01e4-d8ab-4071-be6b-92a9c3b8db7f.webp",
  "45b2b6ab-24a7-451e-a6b1-0e1efa48c403.webp",
  "c001a2a3-48e4-4f9c-90fa-918e306c6e07.webp",
  "543fb066-01f2-49e1-ad5f-3da851694c39.webp",
  "c8785258-1ad7-4c28-af54-c4ec231574a4.webp",
  "ccf23456-468b-4468-8616-55c8029e5f88.webp",
  "b4b87eea-d3c1-4605-be93-bc761b855917.webp",
  "91081192-3714-479c-836d-50bf93e06c52.webp",
];

const testimonials = [
  "f15b0b03-7dd4-4b94-a0bd-8aef8869d846.webp",
  "ed5711ae-6c3f-48ea-abb1-cade6d458e1c.webp",
  "e6e18518-f82e-4d27-9fa2-768112f4e577.webp",
  "42246c63-d4f0-44a8-89bd-e8171204282b.webp",
  "45f53a95-3be7-40bd-b308-c54fa330abeb.webp",
  "20646b31-c321-4581-a3b3-9ed75326d82f.webp",
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
        <img
          className="hero__mobile-art"
          src={asset("hero-mobile-podio.webp")}
          alt="Maria Lisboa — mais de 16 vezes campeã em campeonatos internacionais. Sua próxima conquista começa aqui."
        />
        <img className="hero__texture" src={asset("2e533292-e11e-49bb-88c7-a836c00a9ac8.webp")} alt="" />
        <img className="hero__halo hero__halo--left" src={asset("17f0a2e3-b3f4-4190-8f17-5bf4d87e51b3.svg")} alt="" />
        <img className="hero__portrait" src={asset("9f092faf-9f36-4c5a-8731-0fdcf1d4bf77.webp")} alt="Maria Lisboa" />
        <div className="hero__photos" aria-hidden="true">
          <span><img src={asset("261551d3-e865-4f2e-92ad-41a18439ca10.webp")} alt="" /></span>
          <span><img src={asset("ca73ea98-4dea-4e17-a956-a65ab2293c6c.webp")} alt="" /></span>
        </div>
        <img className="hero__light" src={asset("57494273-2463-4204-a167-b63eb9a0d514.webp")} alt="" />
        <img className="hero__glow hero__glow--top" src={asset("ca8201c1-1042-4ad5-afce-e91ce8001f1d.svg")} alt="" />
        <img className="hero__glow hero__glow--bottom" src={asset("7e635ac2-ebfd-4035-bad6-5488c746a927.svg")} alt="" />
        <div className="hero__content">
          <h1 className="brand-title" id="hero-title"><span>Sua técnica no</span><strong>Pódio</strong></h1>
          <p className="hero__lead">Eleve o nível da sua técnica com critérios de campeonato aplicados ao seu atendimento comercial. <strong>Aprenda o Método e se destaque!</strong></p>
          <p className="hero__note">Uma imersão de 1 dia com Maria Lisboa, multicampeã, jurada e mentora, com selo de formação internacional.</p>
          <ul className="hero__badges" aria-label="Destaques da formação"><li>Método próprio com critérios de campeonato</li><li>Certificação internacional</li></ul>
          <a className="whatsapp-button whatsapp-button--hero" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
        </div>
      </section>

      <section className="manifesto"><p data-reveal="up"><strong>Acredito que excelência técnica, constância e amor pelo que fazemos são o que nos levam além.</strong> E é exatamente esse conhecimento que quero compartilhar com você nesta mentoria.</p></section>

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
          {resultImages.map((src, index) => <div className={`results__card results__card--${index + 1}`} data-reveal="up" key={src}><img src={asset(src)} alt={`Resultado de aluna ${index + 1}`} />{index === 4 && <img className="results__overlay" src={asset("d1b177a3-c042-43c8-93d0-620faf9a5515.webp")} alt="" />}</div>)}
        </div>
        <a className="outline-button" data-reveal="up" href={whatsapp} target="_blank" rel="noreferrer">Quero entregar resultados assim</a>
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
        <div className="testimonials__grid">{testimonials.map((src, index) => <div className={`testimonial testimonial--${index + 1}`} data-reveal="up" key={src}><img src={asset(src)} alt={`Depoimento de aluna ${index + 1}`} /></div>)}</div>
      </section>

      <section className="investment section-fixed">
        <header className="section-heading" data-reveal="up"><h2>Um dia que muda o seu <em>patamar técnico</em></h2><span className="line" /></header>
        <div className="investment__card" data-reveal="up"><p className="eyebrow">Atendimento personalizado</p><h3>Consulte valores<br />e condições</h3><p>Fale com nossa equipe no WhatsApp para receber todas as informações e garantir sua vaga.</p><a className="whatsapp-button whatsapp-button--large" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp</a></div>
      </section>

      <section className="final-cta section-fixed">
        <div className="final-cta__word" aria-hidden="true">MARIA LISBOA</div>
        <img data-reveal="right" src={asset("1c05fdf2-567e-4df3-9cea-76a8eefc5833.webp")} alt="Maria Lisboa" />
        <div className="final-cta__copy" data-reveal="left"><h2>Pronta para<br />subir ao <em>pódio</em>?</h2><p>Garanta sua vaga na formação presencial e leve a sua técnica ao padrão de campeonato, com acompanhamento direto da mentora.</p><a className="dark-button" href={whatsapp} target="_blank" rel="noreferrer">Quero garantir minha vaga</a></div>
      </section>

      <footer className="footer">
        <div className="footer__grid" data-reveal="up">
          <div><div className="footer__brand"><span>Sua técnica no</span><strong>Pódio</strong></div><p>Mentoria de extensão de cílios com Maria Lisboa.</p></div>
          <div><h2>Contato</h2><address>Rua Prefeito Pedro Moreira Borges, 345, 2º piso — Centro, Estiva, MG<br /><a href="tel:+5535997458386">(35) 99745-8386</a><br /><a href="https://instagram.com/marialisboaacademy" target="_blank" rel="noreferrer">@marialisboaacademy</a></address></div>
          <div><h2>Institucional</h2><nav><a href="#">Termos de uso</a><a href="#">Política de privacidade</a></nav></div>
        </div>
        <div className="footer__bottom"><span>© 2026 Maria Lisboa · Mentoria MLC. Todos os direitos reservados.</span><span>Projeto desenvolvido por @josiemorais_</span></div>
      </footer>
    </main>
  );
}
