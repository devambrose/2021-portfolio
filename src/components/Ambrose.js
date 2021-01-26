import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) =>  <Img fixed={data.file.childImageSharp.fixed} />

export const query = graphql`
  query {
    file(relativePath: { eq: "ambrose.jpeg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }