
export default function AboutPage() {
  return (
    <main className="aboutWall">
      <div className="container-fluid p-0">

      {/* ================================= */}
       {/* *~*~*  BEHIND THE BUILDER *~*~* */}
      {/* ================================= */}

        <section
          id="builderSection"
          className="text-center d-flex flex-column justify-content-center align-items-center">
          
          <div id="builderCard" className="py-3 mx-auto m-3">
            
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
            </div>

        {/* *~*~*~*~* CARD *~*~*~*~* */}          
            <div className="builderHeader mt-3">
              <h1 className="display-4 cookie-regular mb-3">Behind the Builder</h1>

              <div className="d-flex justify-content-center w-100 my-4">
                  <img 
                    src="/images/JavaLoveNote.png" 
                      alt="an illustrated post-it taped to the wall that reads 'Java makes my brain happy'." 
                      className="javaNote img-fluid"
                  />
              </div>
              <p className="lead mt-5">After 12 years of owning my own business creating and selling chainmaille jewelry, I decided to trade my pliers for a keyboard and mouse. The medium has changed, but the attention to detail and sense of creativity remain.</p>  
                    <p className="lead">I’m also a mother to the most adorable and big-hearted (almost) three-year-old, and my furry “rubber duck” is my little fluffy old-man of a bunny. </p> 
                    <p className="lead">I’ve always been drawn to both creativity and logic, which is what led me to web development. It gives me the space to design with intention while building systems that actually work for people.</p>
                    <p className="lead">My goal as a developer is to create digital spaces that feel safe and comfortable to use. Growing up in my childhood home, surrounded by the beauty of nature and protected by the strong walls my family built with their own hands, shaped this desire to help others experience that same sense of calm security.</p>
                    <p className="lead">The way I approach development hasn’t changed from that mindset. I focus on usability first, emotional experience second, and strong logic to support both.</p> 
            </div> 
          </div>
        </section>     

        {/* ================================= */}
           {/* *~*~* Little Details *~*~* */}
        {/* ================================= */} 

        <section
          id="detailsSection"
          className="text-center d-flex flex-column justify-content-center align-items-center">
          
          <div id="detailsCard" className="py-3 mx-auto m-2">

          {/* *~*~*~*~* THUMB TACKS *~*~*~*~* */}
            <div className="introPins col-12 col-md-5">
              <img
                src="/images/icons/pin.png"
                alt="Decorative pin element."
                className="gardenTopL img-fluid"
              />
              <img
                src="/images/icons/pin2.png"
                alt="Decorative pin element."
                className="gardenTopR img-fluid"
              />
            
              <img
                src="/images/icons/pin4.png"
                alt="Decorative pin element."
                className="gardenBottomL img-fluid"
              />
            </div>

          {/* *~*~*~*~* CARD *~*~*~*~* */}  
            <div className="detailsHeader mt-3 text-center">
              <h1 className="display-4 cookie-regular mb-3">Garden of Thoughts</h1>

            {/* *~*~*~*~* BLOOMING *~*~*~*~* */}
              <h2 className="subtitle cookie-regular mb-2">Blooming</h2>
              <div className="gardenPatch d-inline-block text-start">
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/BlueIris300.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="iris me-4 mb-2"
                  /><p className="mb-2 ">I love building calm, cozy digital spaces</p>
                </div>
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/BlueIris300.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="iris me-4 mb-2"
                  /><p className="mb-2 ">I love designing with meaning</p>
                </div>
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/BlueIris300.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="iris me-4 mb-2"
                  /><p className="mb-2 ">I really enjoy custom CSS and creating custom assets</p>
                </div>
              </div>

              {/* *~*~*~*~* WILTING *~*~*~*~* */}
              <h2 className="subtitle cookie-regular mb-2 mt-4">Wilting</h2>
              <div className="gardenPatch d-inline-block text-start">
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/Chrysanthemum.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="chrysanthemum me-4 mb-2"
                  /><p className="mb-2 ">Coffee is required for all the things</p>
                </div>
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/Chrysanthemum.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="chrysanthemum me-4 mb-2"
                  /><p className="mb-2 ">Sometimes I overthink layouts (but always get it done!)</p>
                </div>
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/Chrysanthemum.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="chrysanthemum me-4 mb-2"
                  /><p className="mb-2 ">Progress isn't always fast but it is always forward</p>
                </div>
              </div>

              {/* *~*~*~*~* PRICKLY *~*~*~*~* */}
              <h2 className="subtitle cookie-regular mb-2 mt-4">Prickly</h2>
              <div className="gardenPatch d-inline-block text-start">
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/BlackPetunia.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="petunia me-4 mb-2"
                  /><p className="mb-2 ">I sometimes get in fights with Bootstrap</p>
                </div>
                <div className="gardenItem d-flex align-items-center">
                  <img 
                    src="/images/flowers/BlackPetunia.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="chrysanthemum me-4 mb-2"
                  /><p className="mb-2 ">Pixel perfect is something I take a little too seriously</p>
                </div>
                <div className="gardenItem d-flex align-items-center mb-4">
                  <img 
                    src="/images/flowers/BlackPetunia.png" 
                    alt="an illustrated blue iris flower acting as a bullet point" 
                    className="petunia me-4 mb-2"
                  /><p className="mb-2 ">Swift and I do not get along</p>
                </div>
              </div>
            </div> 
          </div>
          <div id="backToTop" className="text-cente mt-4">
            <a href="#" className="btn btn-outline-light btn-edgar rounded-pill px-4">
              Back to Top
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}