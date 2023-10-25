
//-------------------------- menu boton
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


//-------------------- script panier

const incrementButtons = document.querySelectorAll('.cart .quantite button:last-of-type');
const decrementButtons = document.querySelectorAll('.cart .quantite button:first-of-type');
const quantiteInputs = document.querySelectorAll('.cart .quantite input');
const totalPriceElements = document.querySelectorAll('.cart .cart-produc-total-price-valeur');
const totalCheckoutElement = document.querySelector('.totoal-ttl-check-val');
const prixProduit = 20.00; 


// incrementer boucle
for (let i = 0; i < incrementButtons.length; i++) {
    incrementButtons[i].addEventListener('click', () => {
        incrementQuantity( i);
    });
}


// decrementer boucle
for (let i = 0; i < decrementButtons.length; i++) {
    decrementButtons[i].addEventListener('click', () => {
        decrementQuantity(i);
    });
}


// incrementation
function incrementQuantity(i) {
    quantiteInputs[i].value = parseInt(quantiteInputs[i].value) + 1;
    updateTotal(i);
    updateTotalCheckout();
}


// decrementation
function decrementQuantity(i) {
    if (quantiteInputs[i].value > 1) {
        quantiteInputs[i].value = parseInt(quantiteInputs[i].value) - 1;
        updateTotal(i);
        updateTotalCheckout();
    }
}


// total card
function updateTotal(i) {
    const quantite = parseInt(quantiteInputs[i].value);
    const total = quantite * prixProduit;
    totalPriceElements[i].textContent = total.toFixed(2);
}


// total generarl
function updateTotalCheckout() {
    let totalCheckout = 0;
    for (let i = 0; i < totalPriceElements.length; i++) {
        totalCheckout += parseFloat(totalPriceElements[i].textContent);
    }
    totalCheckoutElement.textContent = totalCheckout.toFixed(2);
}





//--------- delete de produit
const deleteButtons = document.querySelectorAll('#btn-delete');
const cartSections = document.querySelectorAll('.cart');

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
        const quantite = parseInt(quantiteInputs[i].value);
        const totalProduit = quantite * prixProduit; 

        const nouveauTotal = parseFloat(totalCheckoutElement.textContent) - totalProduit;
        cartSections[i].remove(); // Supprimez la section du panier
        totalCheckoutElement.textContent = nouveauTotal.toFixed(2); 
    });
}







//------------------------------------ validation de formulaire 

