import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Header from "../components/headerInner"
import Footer from "../components/footer"
import { FaArrowLeft } from "react-icons/fa"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const title = frontmatter.title
  const configData = data.site.siteMetadata

  function contentWithHtml() {
    return { __html: html }
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
        ></link>
        <link rel="canonical" href="{configData.conference_claim}" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta
          property="og:image"
          content="http://bilbostack.com/bilbostack-share.jpg"
        />
        <meta property="og:image:width" content="982" />
        <meta property="og:image:height" content="517" />
        <meta property="og:url" content="http://bilbostack.com" />
        <meta
          property="og:title"
          content="Bilbostack 2022 - 28 de Enero en Bilbao"
        />
        <meta
          property="og:description"
          content="Profesionales referencia del sector tecnológico vendrán a Bilbao a compartir sus conocimientos
                            sobre las diferentes temáticas más relevantes en la actualidad."
        />
      </Helmet>

      <Header data={configData} />

      <section>
        <div className="container">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <FaArrowLeft /> volver al inicio
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={contentWithHtml()}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        canonical_url
        conference_hashtag
        logo
        conference_name
        conference_claim
        conference_date
        header_banner {
          cta_pre_text
          cta_visible
          cta_text
          cta_url
        }
      }
    }
  }
`
