import { Link } from "react-router-dom"
import Logo from '../../assets/img/logo.webp'
import LogoLight from '../../assets/img/logo-light.webp'

function Header() {
  return (
    <header className="header-wrapper">
    <div className="header-area header-default header-transparent sticky-header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-4 col-sm-6 col-lg-2">
                    <div className="header-logo-area">
                        <Link className="link" href="index.html">
                          <img className="logo-main" src={Logo} alt="Logo" style={{ width: '161px', height: '48px' }} />
                          <img className="logo-light" src={LogoLight} alt="Logo" style={{ width: '161px', height: '48px' }} />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <div className="header-navigation-area">
                        <ul className="main-menu nav position-relative">
                            <li><Link className="link" href="index.html">Home</Link></li>
                            <li><Link className="link" href="about.html">About</Link></li>
                            <li><Link className="link" href="services.html">Services</Link></li>
                            <li><Link className="link" href="contact.html">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-8 col-sm-6 col-lg-3">
                    <div className="header-action-area">
                        <div className="header-lang-dropdown">
                            <button type="button" className="btn-lang dropdown-toggle" id="dropdownLang" data-bs-toggle="dropdown" aria-expanded="false">EN</button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownLang">
                                <li className="dropdown-item active">EN</li>
                                <li className="dropdown-item">BN</li>
                                <li className="dropdown-item">FR</li>
                            </ul>
                        </div>
                        <div className="header-action-btn">
                            <Link className="link btn-theme" href="contact.html"><span>Get A Quote</span></Link>
                        </div>
                        <button className="btn-menu d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <span className="icon-line"></span>
        <span className="icon-line"></span>
        <span className="icon-line"></span>
      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header