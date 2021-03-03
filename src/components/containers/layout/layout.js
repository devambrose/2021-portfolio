/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import "./styles/fnt/css/all.css"
import {Helmet} from "react-helmet";
import "./styles/main.css"
import Menu from "../menu/menu"
import Footer from "../footer/footer";
//import {TweenMax,Power3} from "gsap";
import {getTheme,setTheme} from "../../../services/auth";
class LayoutClass extends React.Component{
  constructor(props){
    super(props);

    this.state={
      theme:getTheme(),
    }
    this.changeTheme=this.changeTheme.bind(this);
  }
  changeTheme(){
     const currentTheme=this.state.theme;
     setTheme(!currentTheme);
     this.setState({theme:!currentTheme});
  }
  componentDidMount(){
    
  }
  render(){
  return (
    <section className={(this.state.theme ? 'app-white' :'app-dark')+ " main-section"}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ambrose Portfolio | {this.props.title}</title>
                <link rel="canonical" href="http://itsambrose.space" />
      </Helmet>
      <Menu click={this.changeTheme} theme={this.state.theme} siteTitle={'itsambrose' || `Title`}/>
      <main id={this.props.id}>
      {this.props.children}
      </main>
      <Footer/>
    </section>
  )


  }
}


LayoutClass.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutClass
