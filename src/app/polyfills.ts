// Import core-js polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Polyfill for older browsers
if (typeof window !== 'undefined') {
  // Polyfill for Element.prototype.closest
  if (!Element.prototype.matches) {
    Element.prototype.matches = (Element.prototype as any).msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
  }
  
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s: string) {
      let el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode as Element;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  
  // Polyfill for NodeList.prototype.forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach as any;
  }
} 