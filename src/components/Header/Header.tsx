import Link from "next/link";

  export default function Header() {

    return ( 
      <header className="header">
        <nav className="navbar navbar-expand-md d-flex flex-column h-100 p-0">
      
        {/* *~*~*~*~* LOGO *~*~*~*~* */}  
          <div className="container-fluid d-flex justify-content-between align-items-center p-3">         
            <Link href="/" className="navbar-brand">
              <img 
                src="/images/logo/logoMint.png" 
                className="headerLogo img-fluid" 
                alt="MintBanshee Logo"
              />
            </Link>

            {/* *~*~*~*~* SOCIALS & TOGGLE *~*~*~*~* */}
            <div className="d-flex align-items-center gap-2 gap-md-3 ms-auto">
        
            {/* *~*~*~*~* SOCIAL ICONS *~*~*~*~* */}
              <div className="headerSocials d-flex flex-row flex-md-column gap-2">
                <a href="https://www.linkedin.com/in/mintbanshee" target="_blank" rel="noopener noreferrer">
                  <img src="/images/socials/linkedin.png" 
                      className="socialIcon" 
                      alt="LinkedIn" />
                </a>
                <a href="https://github.com/mintbanshee" target="_blank" rel="noopener noreferrer">
                  <img src="/images/socials/github.png" 
                      className="socialIcon" 
                      alt="GitHub" />
                </a>
                <a href="mailto:mintbanshee@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/socials/email.png" 
                        className="socialIcon"
                        alt="Email" />
                </a>
              </div>
              

            {/* *~*~*~*~* HAMBURGER MENU *~*~*~*~* */}              
              <button
                className="hamburger navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav">
                <span className="navbar-toggler-icon"></span>
              </button>

           </div>

          </div>

          {/* *~*~*~*~* NAV BAR *~*~*~*~* */}
            <div className="collapse navbar-collapse w-100 mt-auto" id="mainNav">
              <div className="glassNav w-100 d-flex justify-content-center py-2">
                <ul className="navbar-nav gap-4">
                  <Link href="/" className="navItem">
                    Home
                  </Link>
                  <Link href="/about" className="navItem">
                    About
                  </Link>
                  <Link href="/portfolio" className="navItem">
                    Portfolio
                  </Link>
                  <Link href="/contact" className="navItem">
                    Contact
                  </Link>
                </ul>
              </div>
            </div>

        </nav>
    </header>
  );
}