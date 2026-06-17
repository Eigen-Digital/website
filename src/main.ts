import '@/styles/brand.css';
import '@/styles/elements/div.css';
import '@/styles/elements/a.css';
import '@/styles/elements/p.css';
import '@/styles/elements/span.css';
import '@/styles/elements/hr.css';
import '@/styles/elements/h1.css';
import '@/styles/elements/h2.css';
import '@/styles/elements/h3.css';
import '@/styles/elements/button.css';
import '@/styles/components/footer.css';
import '@/styles/components/header.css';
import '@/styles/components/top-navigation.css';
import '@/styles/components/footer-navigation.css';
import '@/styles/components/button.css';
import '@/styles/index.css';
import '@/scripts/components/top-navigation'


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