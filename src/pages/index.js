import React from "react"
import Meta from "../components/meta"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import HeaderHome from "../components/headerHome"
import Agenda from "../components/agenda"
import LocationMap from "../components/locationMap"
import Sponsors from "../components/sponsors"
import Footer from "../components/footer"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  const configData = data.site.siteMetadata

  return (
    <Layout>
      <Meta
        title={configData.conference_name + " " + configData.conference_hashtag}
        og_title={configData.conference_title + " - " + configData.conference_hashtag}
        og_description="Profesionales referencia del sector tecnológico vendrán a Bilbao a compartir sus conocimientos
              sobre las diferentes temáticas más relevantes en la actualidad."
      />
      <HeaderHome data={configData} />

      <section id="stats">
        <div className="container">
          <div className="row">
            <div className="col col-md-3 col-sm-6 col-12">
              <span>2&nbsp;tracks</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>8&nbsp;ponencias</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>~1000&nbsp;asistentes</span>
            </div>
            <div className="col col-md-3  col-sm-6 col-12">
              <span>10x&nbsp;networking</span>
            </div>
          </div>
        </div>
      </section>

      <div id="content" class="container">
        <section id="presentation" class="text-center">
          <h2>
            {configData.home.title} <a 
              href="https://twitter.com/hashtag/bilbostack24" 
              target="_blank" 
              rel="noopener noreferrer"><span>{configData.conference_hashtag}</span>
            </a>
          </h2>
          <p>{configData.home.description}</p>
          <p>
            {configData.agenda.visible ? (
              <a href="#agenda">{configData.home.agenda_cta_text}</a>
            ) : (
              ""
            )}
          </p>
        </section>

        <section id="speakers" class="row">
          {configData.speakers.map((speaker, i) => {
            if (speaker.visible === true)
              return (
                <div class="col-lg-4 col-sm-6 col-xs-12">
                  <SpeakerCard speaker={speaker} />
                </div>
              )
            else return <div class="col-lg-4 col-sm-6 col-xs-12"></div>
          })}
        </section>

        {configData.agenda.visible ? (
          <Agenda agenda={configData.agenda} speakers={configData.speakers} />
        ) : (
          ""
        )}

        <LocationMap location={configData.location} />

        <Sponsors sponsorBlocks={configData.sponsor_blocks} />

      </div>

      <Footer />
    </Layout>
  )
}

export default Index;

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        canonical_url
        conference_hashtag
        logo
        conference_name
        conference_date
        conference_claim
        home {
          title
          description
          agenda_cta_text
        }
        header_banner {
          cta_pre_text
          cta_visible
          cta_text
          cta_url
        }
        speakers {
          visible
          slug
          name
          image
          company
          talk {
            title
            description
          }
        }
        agenda {
          visible
          time_slots
          tracks {
            name
            link
            content_in_slots {
              type
              content
            }
          }
        }
        location {
          gmaps_iframe_url
          addresses {
            name
            line
            map_link
          }
        }
        sponsor_blocks {
          visible
          name
          sponsors {
            name
            link
            image
            height_em
          }
        }
      }
    }
  }
`
