import * as React from 'react'


const Section = ({variant, sectionTitle, isContrast, name, children}) => {
    if (variant === "hero") {
        return (
            <section className="hero is-medium is-primary">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-6-desktop is-offset-2-desktop">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }

    return (
    <section className={`section${isContrast === "false" ? '' : ' contrast'}`} id={name} >
        <div className="container">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <div className="content">
                <h3>{sectionTitle}</h3>
                {children}   
              </div>
            </div>         
          </div>
        </div>
      </section>
    )
}

export default Section;