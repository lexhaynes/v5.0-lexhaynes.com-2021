import * as React from "react"
import { Link } from "gatsby"
import NavBar from '../components/navbar'
import Section from '../components/section'
import Footer from '../components/footer'
import '../styles/lib.css'
import '../styles/main.scss'

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Page Not found</title>
      <NavBar />

        <Section sectionTitle="Page not found :-(" isContrast="false">
            <>
               <p>Want to go <Link to="/">Home</Link> instead?</p>
               <div className="spacer"></div>

            </>
        </Section>
        <Footer />
    </main>
  )
}

export default NotFoundPage
