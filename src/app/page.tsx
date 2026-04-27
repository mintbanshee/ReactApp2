// src/app/page.tsx

import Link from "next/link";

// *~*~*~*~*~*~* DISPLAY HOME PAGE *~*~*~*~*~*~*

export default function HomePage() {
  return (
  <main className="homeWall">
    <div className="container-fluid p-0">

      {/* ================================= */}
      {/* *~*~*~*~* INTRO SECTION *~*~*~*~* */}
      {/* ================================= */}
      
      <section
        id="heroSection"
        className="text-center d-flex flex-column justify-content-center align-items-center">

        {/* *~*~*~*~* THUMB TACKS *~*~*~*~* */}
        <div id="intro" className="py-3 mx-auto">
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
          </div>

        {/* *~*~*~*~* INTRO *~*~*~*~* */}
          <div className="introHeader">
            <h1 className="display-4 cookie-regular">Alexandria McQueen</h1>
            <img
              src="/images/shelves/h1Shelf.png"
              alt="Shelf with decorative elements acting as an underline for the name Alexandria McQueen."
              className="img-fluid mb-3"
            />
            <p className="lead">
              Front-end developer building digital homes through code and design.
            </p>
            <Link href="/portfolio" className="btn btn-outline-light btn-edgar rounded-pill px-4">
              View My Work
            </Link>
          </div>

        {/* *~*~*~*~* WELCOME *~*~*~*~* */}          
          <div className="row align-items-center mt-2 px-3">
            <div className="welcomeBlurb col-12 col-md-6 text-md-start">
              <p className="welcome1">Hello and welcome!</p>
              <p className="welcome2">I am a student at triOS college nearing 
                the end of my web development using AI 
                diploma program where I am maintaining a 
                4.0 average.</p>
            </div>

        {/* *~*~*~*~* BIOPIC *~*~*~*~* */}            
            <div className="introImage col-12 col-md-5">
              <img
                src="/images/bioPics/BioPic2.png"
                alt="image of Alexandria looking at the camera with a soft smile. She has a navy blue shirt on and her hair is up in a clip. She is wearing one of the chainmaille necklaces she made before pursuing web development."
                className="bioPic img-fluid"
              />
            </div>
          </div>

        {/* *~*~*~*~* TOOLS *~*~*~*~* */}          
          <div className="toolsSection mt-4">
            <h2 className="cookie-regular">What I Build With</h2>
            <img              
                src="/images/icons/angular.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/html.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/css.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/mysql.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/php.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/javascript.png"
                alt="icon for Angular."
                className="toolIcon img-fluid"
              />
              <img              
                src="/images/icons/illustrator.png"
                alt="icon for adobe illustrator."
                className="toolIcon img-fluid"
              />
          
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* *~*~*~* DESIGN PHILOSOPHY *~*~*~* */}
      {/* ================================= */}

      <section id="buildLogic">
        <div className="buildLogicWrap">

        {/* *~*~*~*~* AVATAR IMG *~*~*~*~* */}          
          <div className="builderAvatar">
            <img
              src="/images/bioPics/TheBuilder.jpg"
              alt="Alexandria's avatar working at a desk with a laptop and paper, planning a website build."
              className="buildImg img-fluid"
            />
          </div>

        {/* *~*~*~*~* LOGIC CARD *~*~*~*~* */}
          <div className="buildLogicCard">
            
        {/* *~*~*~*~* THUMB TACKS *~*~*~*~* */}
            <img
              src="/images/icons/pin.png"
              alt="Decorative pin element."
              className="logicPinTopR img-fluid"
            />
            <img
              src="/images/icons/pin4.png"
              alt="Decorative pin element."
              className="logicPinBottomL img-fluid"
            />
        {/* *~*~*~*~* PHILOSOPHY *~*~*~*~* */}            
            <h2 className="cookie-regular mb-3">Design Philosophy</h2>
              <p className="buildLogicBlurb">Usability builds the house.</p>
              <p className="buildLogicBlurb">Emotional design makes it a home.</p>
              <p className="buildLogicBlurb">Logic keeps it safe.</p>
          </div>
        </div>
      </section>

    </div>
  </main>
  );
}