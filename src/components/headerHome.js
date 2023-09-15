import React from "react"

const HeaderHome = ({ data }) => {
  function claimWithHtml() {
    return { __html: data.conference_claim }
  }

  return (
    <header id="front-header">
      <div className="cover"></div>
      <div className="content">
        <div class="container text-center">
          <img id="logo" src={data.logo} alt={data.conference_name} />
          <h1 class="display-4" dangerouslySetInnerHTML={claimWithHtml()}></h1>
          <p class="lead">{data.conference_date}</p>

          <p>{data.header_banner.cta_pre_text}{data.header_banner.cta_visible}</p>
          <div class={data.header_banner.cta_visible === true ? "" : "hidden"}>
            <a
              class="btn btn-primary btn-lg"
              href={data.header_banner.cta_url}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.header_banner.cta_text}
            </a>
          </div>
          <br /><br />
          <div id="dossier" class="hidden">
            <h5>
              <span>
                👉 Echa un ojo a nuestras&nbsp;
                <a href="#" 
                  target="_blank" 
                  role="button" 
                  rel="noopener noreferrer">
                    opciones de patrocinio
                </a> 👈
              </span><br/>
            </h5>
          </div>
          <div id="hashtag" class="hidden">
            <h5>
              <p>
                ¿Quieres ver también la agenda de <span>#la_previa_de</span> <span>#bilbostack24</span>?&nbsp;
                👉 <a href="http://previa-2024.bilbostack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                     ¡Clicka aquí!
                </a> 👈
              </p>
            </h5>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderHome;
