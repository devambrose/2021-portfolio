import React from "react"
import Layout from "../components/containers/layout/layout"
import SEO from "../components/seo"
import Content from "../components/container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description='devambrose :this is my portfolio' />
    <Content/>
  </Layout>
)

export default IndexPage
