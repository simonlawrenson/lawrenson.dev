import React from "react"
import favAppleTouch from "../images/favicons/apple-touch-icon.png"
import favAndroidL from "../images/favicons/android-chrome-256x256.png"
import favAndroidS from "../images/favicons/android-chrome-192x192.png"
import favIconL from "../images/favicons/favicon-32x32.png"
import favIconS from "../images/favicons/favicon-16x16.png"
import favSVG from "../images/favicons/safari-pinned-tab.svg"

export default () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href={ favAppleTouch } />
    <link rel="icon" type="image/png" sizes="256x256" href={ favAndroidL } />
    <link rel="icon" type="image/png" sizes="192x192" href={ favAndroidS } />
    <link rel="icon" type="image/png" sizes="32x32" href={ favIconL } />
    <link rel="icon" type="image/png" sizes="16x16" href={ favIconS } />
    <link rel="mask-icon" href={favSVG} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
  </>
)