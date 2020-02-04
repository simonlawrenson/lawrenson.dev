import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import ProjectComponent from "../components/projectComponent"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageIss : file(relativePath: { eq: "project-previews/instituteofsomaticsexology.jpg"}) {
          childImageSharp {
            fluid( maxWidth: 330, quality: 100 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageAko : file(relativePath: { eq: "project-previews/akoedu.jpg"}) {
          childImageSharp {
            fluid( maxWidth: 330, quality: 100 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Slider
        dots={false}
        arrows={true}
        infinite={true}
        sped={500}
        slidesToShow={1}
        slidesToScroll={1}
        appendArrows=".btn-arrow-append"
        nextArrows={<button  class="">Next</button>}
        nextArrow={<a href="/hello" class="slick-arrow slick-next" title="Next project">Next project <FontAwesomeIcon icon={['far', 'long-arrow-alt-right']} / ></a>}
        className="project-slider"
      >
        <ProjectComponent
          name="Institute of Somatic Sexology"
          domain="https://instituteofsomaticsexology.com/"
          img={data.imageIss.childImageSharp.fluid}
          cms="CMS: WordPress (Sage starter theme by Roots)"
          js="Libraries: GSAP (Anime.js &amp; ScrollMagic)"
          designLink="https://www.behance.net/georgiav134fde"
          designText="Georgia Vincent Design"
          awardLink="https://www.typewolf.com/site-of-the-day/institute-of-somatic-sexology"
          awardText="Typewolf Site of the Day"
          class="active"
          >
        </ProjectComponent>
        <ProjectComponent
          name="Ako"
          domain="https://akoedu.com.au"
          img={data.imageAko.childImageSharp.fluid}
          cms="CMS: WordPress (Sage starter theme by Roots)"
          js="Libraries: jQuery"
          class=""
        >
        </ProjectComponent>
      </Slider>
    )}
  />
)