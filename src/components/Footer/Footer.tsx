import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer mt-auto w-100">
      <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        {/* --- LEFT COLUMN --- */}
        <div className="footer-side order-2 order-md-1 d-flex justify-content-center flex-1">
          <Link href="/">
            <img src="/images/logo/logoBlack.png"
            className="footerLogo"
            alt="Logo" />
          </Link>
        </div>

        {/* --- CENTER COLUMN --- */}
        <div className="footer-center order-3 order-md-2 text-center flex-grow-1">
          <h1 className="slogan cookie-regular mb-4">Where lore meets magic ✨</h1>
          <p className="mintforge x-small opacity-75">
            © 2026 Alexandria McQueen • The Mintforge
          </p>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="footer-side order-1 order-md-3 d-flex justify-content-center flex-1">
          <div className="d-flex gap-4">
            <a href="https://www.linkedin.com/in/mintbanshee" target="_blank" rel="noopener noreferrer">
              <img src="/images/socials/linkedin.png" 
              className="footerIcons" 
              alt="LinkedIn"
             /></a>
            <a href="mailto:mintbanshee@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/socials/email.png" 
              className="footerIcons" 
              alt="Email" />
            </a>
            <a href="https://github.com/mintbanshee" target="_blank" rel="noopener noreferrer">
              <img src="/images/socials/github.png" 
              className="footerIcons" 
              alt="GitHub" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}