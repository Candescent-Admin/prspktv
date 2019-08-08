import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import "../styles/public.scss"
import "../styles/flip.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      
     logo: file(relativePath: { eq: "prspktv_logo.png" }) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    
    }
  `)

  return (
    <>
    <div id="main_body" className="clearfix">
      <main>{children}</main>
    </div>
    <div id="logo_container">
      <Img className="logo" fluid={data.logo.childImageSharp.fluid} alt="prspktv"/>
    </div>
      <div className="contact-info">
        <a className="light" href="mailto:connect@prspktvinc.com">connect@prspktvinc.com</a>
      </div>
    </>
  )
}


export default Layout
