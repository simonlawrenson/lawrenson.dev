import React from "react"
import PageContainer from "./pageContainer"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div className="wrapper">
    <Header />
    <PageContainer>
      { children }
    </PageContainer>
    <Footer />
  </div>
)