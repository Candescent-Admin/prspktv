import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
// import SmoothScroll from 'smooth-scroll';

class IndexPage extends React.Component {
  componentDidMount() {

    // const scroll = new SmoothScroll();
    const down = document.getElementsByClassName('down-arrow')[0]

    down.addEventListener('click',downClick)

    function downClick(e){
      const ns = document.getElementById('about_section')
      e.preventDefault();
      //
      // scroll.animateScroll(
      //   document.querySelector('#about_section'),
      //   null,
      //   { speed: 1500, easing: 'easeOutQuad' });
      window.scroll({

        top: ns.offsetTop,
        behavior:'smooth'
      });
    }


    const FLIP_TEXTS = 'producers.,planners.,builders.,dreamers.,road-runners.,creators.'.split(','),
          FLIP_SPEED = 300,
          ANIM_SPEED= 225,
          FLIP_OUT = 'flipOutX',
          FLIP_IN = 'flipInX',
          $flipText = document.getElementById('flip');

    let currentTexts = [], j=10;

    const flipAnim = setInterval(function(){
      console.log('j: '+j);
      if(currentTexts.length===0) {
        currentTexts = FLIP_TEXTS.slice(0);
        j=0;
      }
      if(j<6){

      }  else {
        const current = currentTexts.shift();
        addClass($flipText,FLIP_OUT);
        const change = setTimeout(function(){
          // $flipText.html(current);
          $flipText.innerText = current;

          const show = setTimeout(function(){
            removeClass($flipText,FLIP_OUT);
            addClass($flipText,FLIP_IN);
          },ANIM_SPEED/4);
        },ANIM_SPEED);
      }
      j++;

    },(ANIM_SPEED*3));

    function addClass(el,className){
      if(el.className.indexOf(className)<0) el.className +=` ${className}`;
    }
    function removeClass(el,className){
      el.className = el.className.replace(className,"");
    }


  }


  render(){
    const { data } = this.props
    console.log('data');
    console.log(data);
    return(
      <Layout>
        <SEO title="our prspktv" />
        <section id="intro_section">
          <h1><span className="light">a production company</span><br/><span
            className="book">with an agile spirit<br/>&amp; inventive instincts.</span></h1>
          <div className="btn-wrap">
            <a href="mailto:connect@prspktvinc.com" className="btn heavy">Connect With Us</a>

          </div>
          <Img id={`down-arrow`} className="down-arrow" fluid={data.downArrow.childImageSharp.fluid} alt="Click to go down."/>
        </section>


        <section id="about_section">

          <h2 className="clearfix">
            <div className="fixed">we are</div>
            <div className="book animated" id="flip">creators.</div>
          </h2>
          <div className="service-also">
            <p>we are <span className="book">also</span>:</p>
            <ul className="book">
              <li>scalable <span className="no-break">full-service</span> event production</li>
              <li>immersive experiential content creation</li>
              <li>live entertainment production</li>
              <li>technical production management</li>
              <li>logistics &amp; organizational management</li>
            </ul>
          </div>
          <div className="h-bar"/>
          <div className="text-right">

            <p className="tight">from strategic consult &amp; creative navigation, to expert project leadership &amp; dynamic teamwork &mdash; <span className="book">we're ready to dive in</span>.</p>

          </div>
          <div className="clearfix">
            <div className="h-bar right"/>
          </div>

          <div>
            <p className="tight big">consider us your knight in shining armor. your bat phone. <span className="book no-break">your secret weapon</span>.</p>
            <br/>
            <p>wondering what we're capable of?</p>
            <br/>
            <div className="btn-wrap center">
              <a href="mailto:connect@prspktvinc.com" className="btn heavy">Connect With Us</a>

            </div>
          </div>

        </section>
      </Layout>
    )
  }

}


export const indexQuery = graphql`
  query{
     
     downArrow: file(relativePath: { eq: "down-arrow.png" }) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    
  }
`


export default IndexPage
