
export default function ContactPage() {
  return (
    <main className="contactWall">
      <div className="container-fluid p-0">

      {/* ================================= */}
       {/* *~*~*  CONTACT PAGE *~*~* */}
      {/* ================================= */}

        <section
          id="linksSection"
          className="text-center d-flex flex-column justify-content-center align-items-center">
          
          <div id="contactCard" className="py-3 mx-auto m-5">
            
        {/* *~*~*~*~* THUMB TACKS *~*~*~*~* */}

            <div className="introPins col-12 col-md-5">
              <img
                src="/images/icons/pin.png"
                alt="Decorative pin element."
                className="pinTopL img-fluid"
              />
              <img
                src="/images/icons/pin2.png"
                alt="Decorative pin element."
                className="pinTopR img-fluid"
              />
              <img
                src="/images/icons/pin4.png"
                alt="Decorative pin element."
                className="logicPinBottomL img-fluid"
              />
            </div>

        {/* *~*~*~*~* CARD *~*~*~*~* */}          
            <div className="contactHeader mt-3 text-center">
              <h1 className="display-4 cookie-regular">Contact Me</h1>
              <img
                src="/images/shelves/h2Left.png"
                alt="Shelf with decorative elements acting as an underline for the name Alexandria McQueen."
                className="img-fluid mb-1"
              />
              <p className="lead mt-3">Currently growing through a web development diploma program and looking forward to starting my internship in May.</p>
              <p className="lead mt-3">I am seeking employment opportunities for entry-level web developer positions starting in August (when my internship and diploma program end)</p>
            </div> 

            <div className="contactLinks d-flex flex-row flex-wrap justify-content-center align-items-center">
              <a href="https://www.linkedin.com/in/mintbanshee" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/socials/linkedin.png" 
                  alt="LinkedIn icon link" 
                  className="img-fluid" 
                />
              </a>
              <a href="mailto:mintbanshee@gmail.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/socials/email.png" 
                  alt="Email icon link" 
                  className="img-fluid" 
                />
              </a>
              <a href="https://github.com/mintbanshee" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/socials/github.png" 
                  alt="GitHub icon link" 
                  className="img-fluid" 
                />
              </a>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-4">
              <a href="/Alexandria-McQueen-Resume.pdf"
                download
              >
                <button className="btn btn-outline-light btn-resume rounded-pill px-4 py-3">
                  Download My Resume
                </button>
              </a>
            </div>
          </div>
        </section>     

        {/* *~*~*~*~* QUOTE SECTION *~*~*~*~* */} 
        <section id="quoteSection" className="text-center">
          <h1 className="quote cookie-regular mt-2">"Creativity is intelligence having fun."</h1>
          <p className="lead mt-2">- Albert Einstein</p>
        </section>
      </div>
    </main>
  );
}