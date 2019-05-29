

Stripe.setPublishableKey('pk_test_yhtHDVWfKf7IAv8w8yu3QudS00khZiiTIa');

const checkoutForm = document.querySelector('#checkoutForm');
const payButton = document.querySelector('#payButton');
const cardNumber = document.querySelector('#cardNumber');
const cvc = document.querySelector('#cvc');
const expMonth = document.querySelector('#expMonth');
const expYear = document.querySelector('#expYear');
const errorContainer = document.querySelector('#error');

checkoutForm.addEventListener('submit', () => {
  event.preventDefault();
  payButton.disabled = true;
  Stripe.card.createToken({
    number: cardNumber.value,
    cvc: cvc.value,
    exp_month: expMonth.value,
    exp_year: expYear.value
  }, stripeResponseHandler);
  return false;
});

function stripeResponseHandler(status, res) {
   // Grab the form:

   if (res.error) { // Problem!
 
     // Show the errors on the form
    errorContainer.innerHTML = res.error.message;
    payButton.disabled = false; // Re-enable submission
 
   } else { // Token was created!
 
     // Get the token ID:
     let token = response.id;
 
     // Insert the token into the form so it gets submitted to the server:
     let input = document.createElement('input');
     input.setAttribute('type', 'hidden');
     input.setAttribute('name', 'stripeToken');
     input.setAttribute('value', token);
     checkoutForm.appendChild(input);
 
     // Submit the form:
     checkoutForm.submit();
   }
};

