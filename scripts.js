// Track Product Click Events
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
      // Replace 'Product Name' with the actual product name
      gtag('event', 'add_to_cart', {
        'event_category': 'engagement',
        'event_label': 'Product Name',
        'value': 1
      });
  
      // You can also add Facebook Pixel tracking here
      fbq('track', 'AddToCart');
    });
  });

  // Track Subscribe Button Clicks
document.querySelectorAll('.subscription-card button').forEach(button => {
    button.addEventListener('click', function() {
      gtag('event', 'subscribe', {
        'event_category': 'engagement',
        'event_label': 'Subscription Plan Name',
        'value': 1
      });
  
      // Facebook Pixel tracking
      fbq('track', 'Subscribe');
    });
  });
  

  
