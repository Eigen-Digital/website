import '../src/styles/brand.css';
import '../src/styles/elements/div.css';
import '../src/styles/elements/a.css';
import '../src/styles/elements/p.css';
import '../src/styles/elements/span.css';
import '../src/styles/elements/hr.css';
import '../src/styles/elements/h1.css';
import '../src/styles/elements/h2.css';
import '../src/styles/elements/h3.css';
import '../src/styles/elements/button.css';
import '../src/styles/components/footer.css';
import '../src/styles/components/header.css';
import '../src/styles/components/button.css';
import '../src/styles/index.css';

// const industries = [
//   'Small Businesses',
//   'Professional Services',
//   'Consulting Firms',
//   'Recruitment Agencies',
//   'Educational Institutions',
//   'Nonprofits',
//   'Manufacturing',
//   'Healthcare Administration',
//   'Logistics',
//   'Retail'
// ]

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

const dynamicSlider = document.querySelector('.dynamic-slider') as HTMLElement | null;
if (!dynamicSlider) 
  console.warn('Dynamic slider for displaying text is not found.');
else {
  let n = 0;
  setInterval(() => {
    const newN = n + 1;

    n = newN % 14;
    dynamicSlider.style.setProperty('--n', n.toString());

    if (newN === 13) {
    
      const originalTransition = dynamicSlider.style.transition;

      setTimeout(() => {
        dynamicSlider.style.transition = 'none'; 
        dynamicSlider.style.setProperty('--n', '0');

        setTimeout(() => {
          dynamicSlider.style.transition = originalTransition;
          n = 0;
        }, 50);

      }, 1000);
      
    }

  }, 2000);

}