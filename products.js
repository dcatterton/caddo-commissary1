// Caddo Parish Commissary Products Data
const commissaryProducts = {
  "A": [
    { name: "Acetaminophen – 325MG 2PK", price: 1.25 },
    { name: "All-Stars Candy 3.75OZ", price: 2.75 },
    { name: "Andy's Hot Fries", price: 2.25 }
  ],
  "B": [
    { name: "Baby Oil 4 OZ", price: 1.95 },
    { name: "Beef Barbacoa 6 OZ", price: 4.50 },
    { name: "Beef Stew 11.25 OZ", price: 3.75 },
    { name: "Bic Single Blade Razor", price: 1.25 },
    { name: "Boston Best Coffee 3 OZ", price: 1.50 },
    { name: "Brush", price: 1.25 },
    { name: "Buffalo Wings Blue Chz Chips 1.5OZ K", price: 2.25 }
  ],
  "C": [
    { name: "Cappuccino", price: 1.50 },
    { name: "Cereal Bowl w/Lid 24 OZ", price: 6.99 },
    { name: "Cheese Cracker", price: 1.25 },
    { name: "Checkers Set", price: 3.00 },
    { name: "Cheesy Rice Spicy", price: 1.15 },
    { name: "Cheetos Flamin Hot 1.7OZ G", price: 2.25 },
    { name: "Cheez Its 1.5 OZ K", price: 2.25 },
    { name: "Chicken Breast", price: 4.50 },
    { name: "Chili No Beans 11.25 OZ", price: 3.75 },
    { name: "Choc Chip Cookie - Mini 6OZ HK", price: 2.75 },
    { name: "Cinnamon Roll 4OZ", price: 2.35 },
    { name: "Comb - 5 Inch", price: 1.25 },
    { name: "Conditioner 4 OZ", price: 1.89 },
    { name: "Cough Drops 9PK Stick", price: 1.25 },
    { name: "Cream Cheese w/Jalapeno 2OZ", price: 2.85 },
    { name: "Creamer 10 Packets", price: 1.50 }
  ],
  "D": [
    { name: "Dandruff Shampoo 4 OZ", price: 1.89 },
    { name: "Danish Blueberry", price: 2.35 },
    { name: "Denture Adhesive Cream", price: 2.75 },
    { name: "Deodorant - Sport", price: 1.95 },
    { name: "Deodorant - Suave 1.2 OZ", price: 1.95 },
    { name: "Dominoes", price: 3.00 },
    { name: "Doritos Nacho Cheese 1.75 OZ", price: 2.25 },
    { name: "Duplex Creme Cookies 5OZ HK", price: 2.11 }
  ],
  "F": [
    { name: "Fish Steaks in LA Hot Sauce 3.53 OZ HK", price: 2.50 },
    { name: "Foot Cream - Ath 1% Tolnaftate 0.5OZ", price: 3.45 },
    { name: "Fritos Chili Cheese", price: 2.25 }
  ],
  "G": [
    { name: "Gatorade Fruit Punch Drink Mix 7.5 OZ", price: 1.50 },
    { name: "Glazed Honey Bun 3.5OZ", price: 2.35 },
    { name: "Gummi Worms Sour 4.5OZ", price: 2.75 }
  ],
  "H": [
    { name: "Hair Food - Lusti 4OZ", price: 1.95 },
    { name: "Honey Grade A Pure 12 OZ K GK", price: 3.95 },
    { name: "Hot Sauce 10 Packets", price: 0.75 }
  ],
  "I": [
    { name: "Ibuprofen (2PK)", price: 1.25 },
    { name: "Iced Honey Bun 6OZ", price: 2.35 },
    { name: "Iced Oatmeal Cookies 6OZ HK", price: 2.75 },
    { name: "Indigent - Regular Kit", price: 0.00 },
    { name: "Indigent - Special Kit", price: 0.00 },
    { name: "ICS Phone Time - $1", price: 1.00 },
    { name: "ICS Phone Time - $10", price: 10.00 },
    { name: "ICS Phone Time - $5", price: 5.00 }
  ],
  "J": [
    { name: "Jalapeno Sliced 1 OZ GS", price: 1.30 },
    { name: "Jolly Ranchers Assorted 3.7 oz", price: 2.37 }
  ],
  "L": [
    { name: "Lemon Discs 4.5oz", price: 2.40 },
    { name: "Lip Balm", price: 1.99 },
    { name: "Lotion - Cocoa Butter 4 OZ", price: 1.95 }
  ],
  "M": [
    { name: "M&M w/ Peanuts 1.74OZ GK", price: 2.75 },
    { name: "Macaroni & Cheese 3OZ", price: 2.60 },
    { name: "Mackerel Fillets in Brine 3.53 OZ", price: 2.50 },
    { name: "Mackerel in Sriracha", price: 2.69 },
    { name: "Magic Shave Cream 6OZ", price: 8.25 },
    { name: "Maxi Pad 12PK", price: 4.95 },
    { name: "Maxi Pads w/Wings Long - Super 12PK", price: 4.25 },
    { name: "Mayo 10 Packets GHK", price: 3.00 },
    { name: "Mouthwash", price: 1.55 },
    { name: "Mustard 10 Packets GHK", price: 2.25 }
  ],
  "N": [
    { name: "Noodles - Cajun Shrimp 3OZ", price: 1.15 },
    { name: "Noodles - Chicken 3 OZ", price: 1.15 },
    { name: "Noodles - Chili 3 OZ", price: 1.15 },
    { name: "Noodles - LS Chicken 3 oz", price: 1.15 },
    { name: "Noodles - Spicy Vegetables 3OZ", price: 1.15 }
  ],
  "O": [
    { name: "Oatmeal Variety Creamy Fruit 8CT K", price: 4.95 },
    { name: "Oral Pain Relief Gel 0.33 OZ", price: 4.15 },
    { name: "Oysters Smoked in Oil 3OZ", price: 3.95 }
  ],
  "P": [
    { name: "Paper", price: 1.90 },
    { name: "Peanut Butter", price: 1.50 },
    { name: "Peanut Butter Wafers", price: 1.25 },
    { name: "Peanuts Roasted & Salted 1.75 OZ GK", price: 1.50 },
    { name: "Pen", price: 1.05 },
    { name: "Pepper 10 Packets K", price: 0.75 },
    { name: "Petroleum Jelly 1 OZ", price: 2.50 },
    { name: "Pickle", price: 2.75 },
    { name: "Playing Cards", price: 3.00 },
    { name: "Pork Rinds", price: 3.25 },
    { name: "Poptart 2PK - Blueberry", price: 2.00 },
    { name: "Poptart 2PK - Strawberry", price: 2.00 },
    { name: "Pretzels", price: 2.65 },
    { name: "Pro Glo Pomade Gel 4 OZ", price: 5.29 },
  ],
  "R": [
    { name: "Ranch", price: 1.25 },
    { name: "Reeses Peanut Butter Cups 1.5 OZ", price: 2.75 },
    { name: "Refried Beans 8OZ", price: 4.10 },
    { name: "Regular Potato Chips 1.5 OZ GSHK", price: 2.25 },
    { name: "Rice Krispie Treat 1.3 OZ", price: 2.20 },
    { name: "Rolaids - 1 Roll", price: 2.95 }
  ],
  "S": [
    { name: "Salt 10 Packets K", price: 0.75 },
    { name: "Saltine Crackers - 1 Sleeve HK", price: 1.65 },
    { name: "Sardines in Oil 3.53 OZ", price: 2.50 },
    { name: "Shabang Chips", price: 2.25 },
    { name: "Shampoo 4 OZ", price: 1.89 },
    { name: "Skittles 2.17OZ", price: 2.75 },
    { name: "Snack Crackers 1 Box 1.86OZ K", price: 5.45 },
    { name: "Snickers Candy Bar", price: 2.75 },
    { name: "Soap - Purple", price: 2.53 },
    { name: "Soap - White", price: 2.53 },
    { name: "Soap Box - Clear #5", price: 1.25 },
    { name: "Sour Cream & Onion Chips 1.5OZ GHK", price: 2.25 },
    { name: "Squeeze Cheese Jalapeno 2 OZ G", price: 2.85 },
    { name: "Squeeze Cheese, Sharp 2 OZ G", price: 2.85 },
    { name: "SS Fruit Punch K", price: 0.55 },
    { name: "SS Lemonade K", price: 0.55 },
    { name: "SS Tea w/Lemon K", price: 0.55 },
    { name: "Stamped Envelope", price: 0.92 },
    { name: "Starburst Original 2.07 OZ", price: 2.75 },
    { name: "Strawberry Creme Wafer SF 2.75OZ", price: 2.75 },
    { name: "Strawberry Danish", price: 2.35 },
    { name: "Sugar 10PK K", price: 1.00 },
    { name: "Sweetener", price: 1.15 }
  ],
  "T": [
    { name: "Tampons - Regular 20CT", price: 15.10 },
    { name: "Toothbrush 30 Tuft 4\" Handle", price: 1.20 },
    { name: "Toothpaste - Clear Ivory Gel Fluoride 4.6OZ", price: 3.45 },
    { name: "Toothpaste - Colgate", price: 2.89 },
    { name: "Toothpaste - Flouride 0.85OZ", price: 3.45 },
    { name: "Toothpaste - Sensitive", price: 6.39 },
    { name: "Tortillas", price: 2.65 },
    { name: "Tumbler with Lid 22 OZ", price: 1.60 },
    { name: "Tuna in Water 4.23OZ", price: 4.00 },
    { name: "Tuna w Jalapenos in Water 3.53OZ", price: 3.75 }
  ],
  "V": [
    { name: "Vanilla Creme Cookies 5 OZ HK", price: 2.11 },
    { name: "Vanilla Dairy Drink SS 10 OZ", price: 1.50 },
    { name: "Vanilla Wafer Bag HK", price: 3.39 },
    { name: "Vienna Sausage Bites", price: 3.29 }
  ],
  "W": [
    { name: "White Cheddar Popcorn 5 OZ", price: 3.25 },
    { name: "White Rain 3-in-1 Ocean Wave 15 OZ", price: 5.50 }
  ]
};

// Function to render products for a specific letter
function renderProductsForLetter(letter, products = null) {
  const productsToRender = products || commissaryProducts[letter] || [];
  if (productsToRender.length === 0) return '';
  
  return productsToRender.map(product => {
    // Escape the product name for use in HTML attributes
    const escapedName = product.name.replace(/'/g, "\\'").replace(/"/g, '\\"');
    
    return `
    <forge-card>
      <div class="product-item">
        <div class="item-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/No-Image-Placeholder-landscape.svg/1200px-No-Image-Placeholder-landscape.svg.png" alt="${product.name}" />
          <div class="item-details">
            <p class="forge-typography--heading2">${product.name}</p>
            <p class="forge-typography--subheading2" id="price-${product.name.replace(/[^a-zA-Z0-9]/g, '-')}"><span class="item-price">$${product.price.toFixed(2)}</span></p>
          </div>
        </div>
        <div class="item-right">
          <div class="quantity-field">
            <forge-icon-button aria-label="Decrease quantity" onclick="decreaseQuantity(this)">
              <forge-icon name="minus" external></forge-icon>
            </forge-icon-button>
            <forge-text-field density="small">
              <input type="number" value="1" min="0" onchange="updateQuantity(this, '${escapedName}', ${product.price})" oninput="updatePriceDisplay(this, '${escapedName}', ${product.price})">
            </forge-text-field>
            <forge-icon-button aria-label="Increase quantity" onclick="increaseQuantity(this)">
              <forge-icon name="plus" external></forge-icon>
            </forge-icon-button>
          </div>
          <forge-button variant="outlined" onclick="addToOrder('${escapedName}', ${product.price})" disabled>Add</forge-button>
        </div>
      </div>
    </forge-card>
  `;
  }).join('');
}

// Function to render all products or filter by letter
function renderProducts(selectedLetter = 'all', searchTerm = '') {
  const productsContainer = document.getElementById('products-container');
  
  // Filter products based on search term
  let filteredProducts = {};
  
  if (searchTerm.trim() === '') {
    // No search term, show all products or letter-filtered products
    if (selectedLetter === 'all') {
      filteredProducts = commissaryProducts;
    } else {
      filteredProducts[selectedLetter] = commissaryProducts[selectedLetter] || [];
    }
  } else {
    // Search through all products
    const searchLower = searchTerm.toLowerCase();
    Object.keys(commissaryProducts).forEach(letter => {
      const matchingProducts = commissaryProducts[letter].filter(product => 
        product.name.toLowerCase().includes(searchLower)
      );
      if (matchingProducts.length > 0) {
        filteredProducts[letter] = matchingProducts;
      }
    });
  }
  
  // Render the filtered products
  if (Object.keys(filteredProducts).length === 0) {
    productsContainer.innerHTML = `
      <div class="no-results">
        <p class="forge-typography--body1">No products found matching "${searchTerm}"</p>
      </div>
    `;
    return;
  }
  
  let html = '';
  const sortedLetters = Object.keys(filteredProducts).sort();
  
  sortedLetters.forEach(letter => {
    const products = filteredProducts[letter];
    if (products && products.length > 0) {
      html += `
        <div class="category-divider">
          <p class="forge-typography--heading2">${letter}</p>
        </div>
        ${renderProductsForLetter(letter, products)}
      `;
    }
  });
  
  productsContainer.innerHTML = html;
  
  // Update Add button states after rendering
  setTimeout(() => {
    updateAllAddButtonStates();
  }, 50);
}

// Quantity control functions
function increaseQuantity(button) {
  const quantityField = button.parentElement.querySelector('input[type="number"]');
  quantityField.value = parseInt(quantityField.value) + 1;
  quantityField.dispatchEvent(new Event('change'));
  quantityField.dispatchEvent(new Event('input'));
}

function decreaseQuantity(button) {
  const quantityField = button.parentElement.querySelector('input[type="number"]');
  const currentValue = parseInt(quantityField.value);
  if (currentValue > 0) {
    quantityField.value = currentValue - 1;
    quantityField.dispatchEvent(new Event('change'));
    quantityField.dispatchEvent(new Event('input'));
  }
}

function updateQuantity(input, productName, price) {
  const quantity = parseInt(input.value) || 0;
  if (quantity < 0) input.value = 0;
}

function updatePriceDisplay(input, productName, basePrice) {
  const quantity = parseInt(input.value) || 0;
  const totalPrice = basePrice * quantity;
  const priceElementId = `price-${productName.replace(/[^a-zA-Z0-9]/g, '-')}`;
  const priceElement = document.getElementById(priceElementId);
  
  if (priceElement) {
    if (quantity <= 0) {
      priceElement.innerHTML = `<span class="item-price">$${basePrice.toFixed(2)}</span>`;
    } else if (quantity === 1) {
      priceElement.innerHTML = `<span class="item-price">$${basePrice.toFixed(2)}</span>`;
    } else {
      priceElement.innerHTML = `<span class="item-price">$${basePrice.toFixed(2)} × ${quantity} = <span class="item-total">$${totalPrice.toFixed(2)}</span></span>`;
    }
  }
  
  // Update Add button state based on balance
  updateAddButtonState(input, productName, basePrice, quantity);
}

function updateAddButtonState(input, productName, basePrice, quantity) {
  const addButton = input.closest('.item-right').querySelector('forge-button');
  if (!addButton) return;
  
  if (quantity <= 0) {
    addButton.disabled = true;
    addButton.textContent = 'Add';
    return;
  }
  
  // Calculate if adding this item would exceed balance (including 9% sales tax)
  const currentSubtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const newItemTotal = basePrice * quantity;
  const totalSubtotalAfterAdd = currentSubtotal + newItemTotal;
  const totalAfterTax = totalSubtotalAfterAdd * 1.09; // Add 9% sales tax
  const remainingBalance = 21.72;
  
  if (totalAfterTax > remainingBalance) {
    addButton.disabled = true;
    addButton.textContent = 'Exceeds Balance';
  } else {
    addButton.disabled = false;
    addButton.textContent = 'Add';
  }
}

function updateAllAddButtonStates() {
  const addButtons = document.querySelectorAll('.item-right forge-button');
  const currentSubtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const remainingBalance = 21.72;
  
  addButtons.forEach(button => {
    const quantityField = button.closest('.item-right').querySelector('input[type="number"]');
    if (!quantityField) return;
    
    const quantity = parseInt(quantityField.value) || 0;
    const productCard = button.closest('.product-item');
    const priceElement = productCard.querySelector('.item-price');
    
    if (!priceElement) return;
    
    // Extract price from the price element text
    const priceText = priceElement.textContent;
    const priceMatch = priceText.match(/\$(\d+\.\d+)/);
    if (!priceMatch) return;
    
    const basePrice = parseFloat(priceMatch[1]);
    const newItemTotal = basePrice * quantity;
    const totalSubtotalAfterAdd = currentSubtotal + newItemTotal;
    const totalAfterTax = totalSubtotalAfterAdd * 1.09; // Add 9% sales tax
    
    if (quantity <= 0) {
      button.disabled = true;
      button.textContent = 'Add';
    } else if (totalAfterTax > remainingBalance) {
      button.disabled = true;
      button.textContent = 'Exceeds Balance';
    } else {
      button.disabled = false;
      button.textContent = 'Add';
    }
  });
}

// Order management
let currentOrder = [];

function addToOrder(productName, price) {
  const quantityField = event.target.parentElement.parentElement.querySelector('input[type="number"]');
  const quantity = parseInt(quantityField.value) || 0;
  
  if (quantity > 0) {
    // Calculate current order total (including 9% sales tax)
    const currentSubtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newItemTotal = price * quantity;
    const totalSubtotalAfterAdd = currentSubtotal + newItemTotal;
    const totalAfterTax = totalSubtotalAfterAdd * 1.09; // Add 9% sales tax
    const remainingBalance = 21.72;
    
    // Check if adding this item would exceed the balance
    if (totalAfterTax > remainingBalance) {
      // Show error message or alert
      alert(`Cannot add item. This would exceed your remaining balance of $${remainingBalance.toFixed(2)} (including 9% sales tax).`);
      return;
    }
    
    // Check if item already exists in order
    const existingItem = currentOrder.find(item => item.name === productName);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentOrder.push({
        name: productName,
        price: price,
        quantity: quantity
      });
    }
    
    updateOrderDisplay();
    
    // Reset quantity field and price display to default state
    quantityField.value = 1;
    updatePriceDisplay(quantityField, productName, price);
  }
}



function showMobileOrderDialog() {
  const dialog = document.getElementById('mobile-order-dialog');
  if (dialog) {
    // Update the dialog content
    updateMobileOrderDialog();
    
    // Open the dialog
    dialog.open = true;
  }
}

function closeMobileOrderDialog() {
  const dialog = document.getElementById('mobile-order-dialog');
  if (dialog) {
    dialog.open = false;
  }
}

function updateMobileOrderDialog() {
  const dialogContent = document.querySelector('.mobile-order-dialog-content');
  const dialogTotal = document.getElementById('mobile-dialog-total');
  const taxSubtotalRow = document.querySelector('.tax-subtotal-row');
  
  if (!dialogContent || !dialogTotal) return;
  
  if (currentOrder.length === 0) {
    dialogContent.innerHTML = '<p class="forge-typography--body2 order-empty-message">No items in order</p>';
    dialogTotal.textContent = '$0.00';
    if (taxSubtotalRow) {
      taxSubtotalRow.innerHTML = `
        <span class="forge-typography--body2">Subtotal: $0.00</span>
        <span class="forge-typography--body2">Sales tax: $0.00</span>
      `;
    }
    return;
  }
  
  let html = '';
  let subtotal = 0;
  
  currentOrder.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    // Escape the item name for use in HTML attributes
    const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '\\"');
    
    html += `
      <div class="order-item">
        <div class="order-item-header">
          <p class="forge-typography--body2 product-name">${item.name}</p>
          <p class="forge-typography--heading2 product-price">$${itemTotal.toFixed(2)}</p>
        </div>
        <div class="order-item-controls">
          <div class="order-item-quantity-controls">
            <forge-icon-button aria-label="Decrease quantity" onclick="decreaseOrderQuantity('${escapedName}')" ${item.quantity <= 1 ? 'disabled' : ''}>
              <forge-icon name="minus" external></forge-icon>
            </forge-icon-button>
            <forge-text-field density="small">
              <input type="number" value="${item.quantity}" min="1" onchange="updateOrderQuantity('${escapedName}', this.value)" oninput="updateOrderQuantity('${escapedName}', this.value)">
            </forge-text-field>
            <forge-icon-button aria-label="Increase quantity" onclick="increaseOrderQuantity('${escapedName}')">
              <forge-icon name="plus" external></forge-icon>
            </forge-icon-button>
          </div>
          <forge-button variant="text" onclick="removeFromOrder('${escapedName}')" class="remove-btn" theme="error">
            <forge-icon slot="start" name="remove" external></forge-icon>
            Remove
          </forge-button>
        </div>
      </div>
    `;
  });
  
  // Calculate sales tax (9%)
  const salesTax = subtotal * 0.09;
  const orderTotal = subtotal + salesTax;
  
  dialogContent.innerHTML = html;
  dialogTotal.textContent = `$${orderTotal.toFixed(2)}`;
  
  // Update the tax and subtotal row
  if (taxSubtotalRow) {
    taxSubtotalRow.innerHTML = `
      <span class="forge-typography--body1">Subtotal: $${subtotal.toFixed(2)}</span>
      <span class="forge-typography--body1">Sales tax: $${salesTax.toFixed(2)}</span>
    `;
  }
}

function submitOrder() {
  if (currentOrder.length === 0) {
    alert('No items in order to submit.');
    return;
  }
  
  const subtotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const salesTax = subtotal * 0.09;
  const orderTotal = subtotal + salesTax;
  
  if (confirm(`Submit order for $${orderTotal.toFixed(2)}?\n\nSubtotal: $${subtotal.toFixed(2)}\nSales tax: $${salesTax.toFixed(2)}\nOrder total: $${orderTotal.toFixed(2)}`)) {
    // Here you would typically send the order to your backend
    alert('Order submitted successfully!');
    
    // Clear the order
    currentOrder = [];
    updateOrderDisplay();
    updateMobileOrderDialog();
    
    // Close the dialog
    const dialog = document.getElementById('mobile-order-dialog');
    if (dialog) {
      dialog.open = false;
    }
  }
}

function updateOrderDisplay() {
  const orderContainer = document.querySelector('aside');
  const totalElement = document.getElementById('order-total');
  const mobileOrderTotal = document.getElementById('mobile-order-total');
  const mobileRemainingBalance = document.getElementById('mobile-remaining-balance');
  const headerMeter = document.getElementById('meter');
  const headerRemainingBalance = document.querySelector('.header-card-right .balance-amount');
  const clearOrderBtn = document.querySelector('.clear-order-btn');
  const drawerSubtotal = document.getElementById('drawer-subtotal');
  const drawerTax = document.getElementById('drawer-tax');
  
  // Update all Add button states after order changes
  updateAllAddButtonStates();
  
  if (currentOrder.length === 0) {
    const emptyMessage = '<p class="forge-typography--body2 order-empty-message">No items in order</p>';
    if (orderContainer) orderContainer.innerHTML = emptyMessage;
    if (totalElement) totalElement.textContent = '$0.00';
    if (mobileOrderTotal) mobileOrderTotal.textContent = '$0.00';
    if (mobileRemainingBalance) mobileRemainingBalance.textContent = '$21.72';
    if (headerRemainingBalance) headerRemainingBalance.textContent = '$21.72';
    if (headerMeter) headerMeter.value = 0;
    if (clearOrderBtn) clearOrderBtn.style.display = 'none';
    if (drawerSubtotal) drawerSubtotal.textContent = '$0.00';
    if (drawerTax) drawerTax.textContent = '$0.00';
    
    // Hide mobile order dialog when no items
    const mobileOrderDialog = document.getElementById('mobile-order-sheet');
    if (mobileOrderDialog) {
      mobileOrderDialog.open = false;
    }
    return;
  }
  
  // Show clear order button when there are items
  if (clearOrderBtn) clearOrderBtn.style.display = 'flex';
  
      // Show mobile order dialog when there are items
    const mobileOrderDialog = document.getElementById('mobile-order-sheet');
    if (mobileOrderDialog) {
      mobileOrderDialog.open = true;
    }
  
  let html = '';
  let total = 0;
  
  currentOrder.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    // Escape the item name for use in HTML attributes
    const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '\\"');
    
    html += `
      <div class="order-item">
        <div class="order-item-header">
          <p class="forge-typography--body1 product-name">${item.name}</p>
          <p class="forge-typography--heading2 product-price">$${itemTotal.toFixed(2)}</p>
        </div>
        <div class="order-item-controls">
          <div class="order-item-quantity-controls">
            <forge-icon-button aria-label="Decrease quantity" onclick="decreaseOrderQuantity('${escapedName}')" ${item.quantity <= 1 ? 'disabled' : ''}>
              <forge-icon name="minus" external></forge-icon>
            </forge-icon-button>
            <forge-text-field density="extra-small">
              <input type="number" value="${item.quantity}" min="1" onchange="updateOrderQuantity('${escapedName}', this.value)" oninput="updateOrderQuantity('${escapedName}', this.value)">
            </forge-text-field>
            <forge-icon-button aria-label="Increase quantity" onclick="increaseOrderQuantity('${escapedName}')">
              <forge-icon name="plus" external></forge-icon>
            </forge-icon-button>
          </div>
          <forge-button variant="text" onclick="removeFromOrder('${escapedName}')" class="remove-btn" theme="error">
            <forge-icon slot="start" name="remove" external></forge-icon>
            Remove
          </forge-button>
        </div>
      </div>
    `;
  });
  
  // Calculate sales tax and total
  const salesTax = total * 0.09;
  const orderTotal = total + salesTax;
  
  const totalText = `$${orderTotal.toFixed(2)}`;
  const remainingBalance = Math.max(0, 21.72 - orderTotal);
  
  // Calculate meter progress based on used balance (including tax)
  // Meter should show the percentage of balance used, not remaining
  const initialBalance = 21.72;
  const usedBalance = Math.min(orderTotal, initialBalance);
  const meterProgress = Math.round((usedBalance / initialBalance) * 100);
  
  if (orderContainer) orderContainer.innerHTML = html;
  if (totalElement) totalElement.textContent = totalText;
  if (mobileOrderTotal) mobileOrderTotal.textContent = `$${orderTotal.toFixed(2)}`;
  if (mobileRemainingBalance) mobileRemainingBalance.textContent = `$${remainingBalance.toFixed(2)}`;
  if (headerRemainingBalance) headerRemainingBalance.textContent = `$${remainingBalance.toFixed(2)}`;
  
  // Update drawer tax and subtotal information
  if (drawerSubtotal) drawerSubtotal.textContent = `$${total.toFixed(2)}`;
  if (drawerTax) drawerTax.textContent = `$${salesTax.toFixed(2)}`;
  
  // Update header meter - ensure it's a number and clamp to 0-100
  if (headerMeter) {
    const clampedValue = Math.max(0, Math.min(100, meterProgress));
    headerMeter.value = clampedValue;
  }
  
  // Update mobile dialog if it's open
  const mobileDialog = document.getElementById('mobile-order-dialog');
  if (mobileDialog && mobileDialog.open) {
    updateMobileOrderDialog();
  }
}

function removeFromOrder(productName) {
  currentOrder = currentOrder.filter(item => item.name !== productName);
  updateOrderDisplay();
}

// New functions for order quantity management
function increaseOrderQuantity(productName) {
  const item = currentOrder.find(item => item.name === productName);
  if (!item) return;
  
  // Calculate if increasing would exceed balance (including 9% sales tax)
  const currentSubtotal = currentOrder.reduce((sum, orderItem) => {
    if (orderItem.name === productName) {
      return sum + (orderItem.price * (orderItem.quantity + 1));
    }
    return sum + (orderItem.price * orderItem.quantity);
  }, 0);
  
  const totalAfterTax = currentSubtotal * 1.09; // Add 9% sales tax
  const remainingBalance = 21.72;
  
  if (totalAfterTax > remainingBalance) {
    alert(`Cannot increase quantity. This would exceed your remaining balance of $${remainingBalance.toFixed(2)} (including 9% sales tax).`);
    return;
  }
  
  item.quantity += 1;
  updateOrderDisplay();
}

function decreaseOrderQuantity(productName) {
  const item = currentOrder.find(item => item.name === productName);
  if (!item || item.quantity <= 1) return;
  
  item.quantity -= 1;
  updateOrderDisplay();
}

function updateOrderQuantity(productName, newQuantity) {
  const item = currentOrder.find(item => item.name === productName);
  if (!item) return;
  
  const quantity = parseInt(newQuantity) || 1;
  if (quantity < 1) {
    // Reset to 1 if invalid input
    item.quantity = 1;
    updateOrderDisplay();
    return;
  }
  
  // Calculate if the new quantity would exceed balance (including 9% sales tax)
  const currentSubtotal = currentOrder.reduce((sum, orderItem) => {
    if (orderItem.name === productName) {
      return sum + (orderItem.price * quantity);
    }
    return sum + (orderItem.price * orderItem.quantity);
  }, 0);
  
  const totalAfterTax = currentSubtotal * 1.09; // Add 9% sales tax
  const remainingBalance = 21.72;
  
  if (totalAfterTax > remainingBalance) {
    alert(`Cannot set quantity to ${quantity}. This would exceed your remaining balance of $${remainingBalance.toFixed(2)} (including 9% sales tax).`);
    // Reset to previous valid quantity
    updateOrderDisplay();
    return;
  }
  
  item.quantity = quantity;
  updateOrderDisplay();
}

function clearOrder() {
  if (confirm('Are you sure you want to clear your entire order?')) {
    currentOrder = [];
    updateOrderDisplay();
  }
}

// Global variables for current state
let currentSelectedLetter = 'all';
let currentSearchTerm = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Render all products initially
  renderProducts();
  
  // Initialize order display with empty state
  updateOrderDisplay();
  
  // Set initial button states
  setTimeout(() => {
    updateAllAddButtonStates();
  }, 100);
  
  // Ensure "All" category is selected by default
  setTimeout(() => {
    const allChip = document.querySelector('#category-chips forge-chip[value="all"]');
    if (allChip) {
      allChip.selected = true;
    }
  }, 50);
  
  // Add search functionality
  const searchInput = document.querySelector('.order-search-field input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearchTerm = this.value;
      
      // Auto-select "All" category when searching
      if (currentSearchTerm.trim() !== '') {
        selectCategory('all');
      } else {
        // When search is cleared, ensure "All" is selected
        selectCategory('all');
      }
      
      renderProducts(currentSelectedLetter, currentSearchTerm);
    });
  }
  
  // Handle responsive drawer behavior
  function handleDrawerVisibility() {
    const drawer = document.querySelector('forge-drawer');
    const mobileOrderDialog = document.getElementById('mobile-order-sheet');
    const isSmallScreen = window.innerWidth < 1200;
    
    if (isSmallScreen) {
      // Hide drawer on small screens
      if (drawer) {
        drawer.style.display = 'none';
      }
      // Ensure mobile order dialog is available on small screens
      if (mobileOrderDialog) {
        mobileOrderDialog.style.display = 'block';
      }
    } else {
      // Show drawer on large screens
      if (drawer) {
        drawer.style.display = '';
      }
      // Hide mobile order dialog on large screens
      if (mobileOrderDialog) {
        mobileOrderDialog.style.display = 'none';
        mobileOrderDialog.open = false; // Close it if it was open
      }
    }
  }
  
  // Initial check
  handleDrawerVisibility();
  
  // Listen for window resize
  window.addEventListener('resize', handleDrawerVisibility);
  
  // Update category chip functionality
  const chipSet = document.getElementById('category-chips');
  const chips = chipSet.querySelectorAll('forge-chip');
  
  chips.forEach(chip => {
    chip.addEventListener('click', function(event) {
      event.stopPropagation();
      
      const selectedValue = this.value;
      selectCategory(selectedValue);
    });
  });
  
  // Function to select a category and update UI
  function selectCategory(categoryValue) {
    // Deselect all chips
    chips.forEach(c => c.selected = false);
    
    // Find and select the target chip
    const targetChip = Array.from(chips).find(chip => chip.value === categoryValue);
    if (targetChip) {
      targetChip.selected = true;
    }
    
    // Update current selection
    currentSelectedLetter = categoryValue === 'all' ? 'all' : 
                           categoryValue.toUpperCase();
    
    // Render products with current selection and search term
    renderProducts(currentSelectedLetter, currentSearchTerm);
  }
}); 