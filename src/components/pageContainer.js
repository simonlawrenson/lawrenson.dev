import React from "react"
import containerStyles from "../styles/pageContainer.module.css"

export default ({ children }) => (
  <main className={containerStyles.pageContainer}>
    {children}
  </main>
)