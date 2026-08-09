class EDFooterMain extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="footer">
        <div class="footer-container">
          <div class="company-section">
            <img
              width="100px"
              height="74.67px"
              src="/eigen-digital-full-logo-white.svg"
              alt="Eigen Digital logo"
              loading="lazy"
            />
            <p class="description">
              Powering businesses through automated systems and digital architecture.
            </p>
            <div class="social-handles-section" role="list">
              <a
                role="listitem"
                href="https://www.linkedin.com/company/eigen-digital/"
                aria-label="Visit our LinkedIn page"
                target="_blank"
                rel="noopener"
                ><img
                  width="24"
                  height="24"
                  src="/linkedin-logo.svg"
                  alt="LinkedIn logo"
                  aria-hidden="true"
                  loading="lazy"
              /></a>
              <a
                role="listitem"
                href="https://www.instagram.com/eigendigital"
                aria-label="Check our Instagram page"
                target="_blank"
                rel="noopener"
                ><img
                  width="24"
                  height="24"
                  src="/instagram-logo.svg"
                  alt="Instagram logo"
                  aria-hidden="true"
                  loading="lazy"
              /></a>
              <a
                role="listitem"
                href="https://x.com/eigendigital"
                aria-label="Message us on X (formerly Twitter)"
                target="_blank"
                rel="noopener"
                ><img
                  width="24"
                  height="24"
                  src="/twitter-logo.svg"
                  alt="X logo"
                  aria-hidden="true"
                  loading="lazy"
              /></a>
              <a
                role="listitem"
                href="https://www.youtube.com/@EigenDigital"
                aria-label="Watch any of our YouTube videos"
                target="_blank"
                rel="noopener"
                ><img
                  width="24"
                  height="24"
                  src="/youtube-logo.svg"
                  alt="YouTube logo"
                  aria-hidden="true"
                  loading="lazy"
              /></a>
            </div>
          </div>
          <div class="nav-section" role="navigation">
            <div class="nav-list-container">
              <span class="nav-list-header">Products</span>
              <div class="nav-list" role="list">
                <a href="/products/templates/" role="listitem">Templates</a>
              </div>
            </div>
            <div class="nav-list-container">
              <span class="nav-list-header">Company</span>
              <div class="nav-list" role="list">
                <a href="/company/contacts.html" role="listitem">Contacts</a>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright-section">
            <span>&copy; </span><span id="current-year"></span> <span>Eigen Digital</span>.
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
    `
  }
}


customElements.define('ed-footer-main', EDFooterMain);
customElements.whenDefined('ed-footer-main').then(() => {
    const currentYearSpan = document.getElementById("current-year");

    if (!currentYearSpan) {
      console.warn("Current year display for copyright not found.");
      return;
    };
    
    currentYearSpan.textContent = `${new Date().getFullYear()}`;
}).catch(err => console.error((err as Error).message));