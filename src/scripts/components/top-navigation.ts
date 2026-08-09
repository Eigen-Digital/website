class EDTopNavigationMain extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="header">
        <div class="header-container">
          <img
            width="28"
            height="28"
            style="object-fit: contain; object-position: center"
            src="/eigen-digital-mini.svg"
            alt="Eigen Digital logo"
            fetchpriority="high"
            loading="eager"
          />
          <div class="navigation" role="navigation">
            <div class="nav-list" role="list">
              <span role="listitem" popovertarget="products-popover"
                >Products
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.43057 8.51192C4.70013 8.19743 5.17361 8.161 5.4881 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5694 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51191 9.56946C4.19742 9.29989 4.161 8.82641 4.43057 8.51192Z"
                  />
                </svg>
                <div class="menu-popover" id="products-popover" popover="auto">
                  <a href="/products/templates/" class="menu">
                    <div class="img-container">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H11C11.5523 21 12 20.5523 12 20V15C12 14.4477 11.5523 14 11 14Z"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 14H17C16.4477 14 16 14.4477 16 15V20C16 20.5523 16.4477 21 17 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="description-container">
                      <span class="heading">Templates</span>
                      <span class="subheading"
                        >Ready-to-use templates for business and personal productivity</span
                      >
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div class="cta-container">
            <a href="/company/contacts.html" aria-label="Talk to us" class="button primary">Contact us</a>
          </div>
        </div>
      </div>
    </header>
    `
  }
}
customElements.define('ed-top-nav-main', EDTopNavigationMain);
customElements.whenDefined('ed-top-nav-main').then(() => {
  const productPopover = document.getElementById('products-popover');
  const productPopoverTrigger = document.querySelector('[popovertarget="products-popover"]');

  if (!productPopover || !productPopoverTrigger) 
    console.warn('Failed to show popover for navigation.');
  else {
    productPopoverTrigger.addEventListener('mouseenter', () => productPopover.showPopover({source: productPopoverTrigger as HTMLElement}));

    productPopoverTrigger.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!productPopover.matches(':hover')) {
          productPopover.hidePopover();
        }
      }, 100);
    });

    productPopover.addEventListener('mouseleave', () => productPopover.hidePopover());
  }
})