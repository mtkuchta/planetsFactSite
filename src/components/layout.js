/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AppProvider from "../providers/AppProvider"
import Header from "./Header/Header"
import backgroundStars from "../assets/images/background-stars.svg"

const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundStars});
  background-color: #070724;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <AppProvider>
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          {children}
        </Wrapper>
      </AppProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
