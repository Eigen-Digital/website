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