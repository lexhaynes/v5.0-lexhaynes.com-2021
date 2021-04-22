import * as React from "react"
import NavBar from '../components/navbar'
import Section from '../components/section'
import Footer from '../components/footer'
import ProfilePic from '../images/profile.jpg'
import '../styles/lib.css'
import '../styles/main.scss'
import { SocialIcon } from 'react-social-icons';


const IndexPage = () => {
    return (
        <main>
            <title>Alexandra Haynes: Web Developer</title>
            <NavBar />
            <Section variant="hero">
                <p className="content is-spaced">
                    <img className="profile-pic" src={ProfilePic} alt="Alexandra Haynes" />
                </p>
                <h1 className="title is-2 is-spaced">
                Hi, I'm Alex
                </h1>
                <h2 className="subtitle">
                    I'm a <strong>Front-End Developer</strong> with a strong eye for design. I build highly-interactive & impactful websites, web apps, and mobile apps.
                </h2>             

                <p className="buttons">
                    <a className="button" href="https://www.linkedin.com/in/alexandra-haynes-36349184/">
                        <span className="icon">
                            <SocialIcon network="linkedin" bgColor="#666" />
                        </span>
                        <span>LinkedIn</span>
                    </a>
                    
                    <a className="button" href="https://github.com/lexhaynes">
                        <span className="icon">
                            <SocialIcon network="github" bgColor="#666" />
                        </span>
                        <span>GitHub</span>
                    </a>
                </p>
            </Section>

            <Section sectionTitle="About Me" isContrast="false" name="about">
                <>
                    <p>I wear many hats. Here are some of my past responsibilities:</p>
                    <ul>
                        <li>Conceptualizing and developing <strong>augmented reality</strong> products for premium brands</li>
                        <li><strong>Rapidly prototyping</strong> new ad formats</li>
                        <li>Building out complex, interactive <strong>web ads and games</strong> for top-tier brands</li>
                    <li>Creating <strong>documentation</strong> for development workflows and ad products</li>
                    </ul> 
                </>
            </Section>

            <Section sectionTitle="What I've built" isContrast="true" name="portfolio">
                <>

              <p><strong>Highly interactive web ads</strong></p>        
              <ul>
                 <li> <a href ="https://ar-mardi-gras-mask.netlify.app/" target="blank">Augmented Reality</a></li> (prototype)
                 <li> <a href ="https://bit.ly/2ItHEnT" target="blank">360 Viewer</a></li>
                <li> <a href ="https://bit.ly/39xwpXg" target="blank">Audio player</a> (desktop only)</li>
                 <li> <a href ="https://bit.ly/2Q0PY2v" target="blank">Photo filters</a></li>
                 <li> <a href ="https://bit.ly/2W1z5bJ" target="blank">Drag & Drop</a></li>
                 <li> <a href ="https://bit.ly/2PXvqbi" target="blank">Health facility locator</a></li>
                 <li> <a href ="https://everly-jamboree-438f3e.netlify.com/" target="blank">Holiday microsite</a></li>
                 <li> <a href ="https://bit.ly/2vUj8cC" target="blank">Vehicle customizier</a></li>
                 <li> <a href ="https://bit.ly/2VWsPSH" target="blank">Sous vide meat</a></li>
                </ul>

                 <p><strong>Web ads with games</strong></p>
                 <ul>
                   <li> <a href ="https://bit.ly/3aGCBMG" target="blank">Three of a Kind game</a></li>
                   <li> <a href ="https://bit.ly/2vTwiGR" target="blank">Matching game</a></li>
                   <li> <a href ="https://bit.ly/3aH5VCY" target="blank">Tap-to-collect game</a></li>
                   <li> <a href ="https://bit.ly/332h4vv" target="blank">SkiFree copycat game</a></li>
                 </ul>

                <p><strong>Web ads with product hotspots</strong></p>
                <ul>
                 <li> <a href ="https://bit.ly/2vIgoPP" target="blank">Hotspots for household brand, Version A</a></li>
                 <li> <a href ="https://bit.ly/3cM2e0m" target="blank">Hotspots for household brand, Version B</a></li>
                 <li> <a href ="https://bit.ly/2IzyNkx" target="blank">Holiday hotspots</a></li>
                </ul>

                 <p><strong>Web ads for holiday shopping</strong></p>
                <ul>
                 <li> <a href ="https://bit.ly/3cJRhN2" target="blank">Holiday guift guide</a></li>
                 <li> <a href ="https://bit.ly/2vaml7K" target="blank">Holiday micro-shop</a></li>
                 <li> <a href ="https://bit.ly/332ddyx" target="blank">Holiday twinkling stars</a></li>
                </ul>

                 <p><strong>Web ads with promos</strong></p>
                <ul>
                 <li> <a href ="https://bit.ly/3aGFrkO" target="blank">Event promo</a></li>
                 <li> <a href ="https://bit.ly/2W8ZlkL" target="blank">Conference promo with endframe hotspots</a></li>
                 <li> <a href ="https://bit.ly/2v741wh" target="blank">Happy hour promo</a></li>
              </ul>
                 

              <div className="notification">
                  <p>To see more demos, get in touch with me on <a href ="https://www.linkedin.com/in/alexandra-haynes-36349184/" target="blank">LinkedIn</a></p>
              </div>
               
                </>
            </Section>

            <Section sectionTitle="What I'm working on now" isContrast="false" name="current-projects">
            <p>I'm currently working on a web app to help cat owners find the perfect food for furry friends with special dietary needs!</p>
            </Section>

            <Section sectionTitle="Skills" isContrast="true" name="skills">
                <>
                    <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>NodeJS</li>
                    <li>CSS / Sass / Tailwind / Bulma / Bootstrap</li>
                    <li>UI Design</li>
                    <li>Semantic HTML</li>
                    <li>Python</li>
                    <li>Sketch / Photoshop / Illustrator / Adobe Suite</li>
                </ul>
                </>
            </Section>

            <Footer />
        </main>
    )
}
export default IndexPage