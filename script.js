function toggleProductForm() 
{
    var productForm = document.getElementById('product-form');
    var toggleButton = document.getElementById('toggle-form-btn');
    if (productForm.style.display === "none") {
        productForm.style.display = "block";
        toggleButton.textContent = "Hide Form";
    } else {
        productForm.style.display = "none";
        toggleButton.textContent = "Add Product";
    }
}




function addProduct() {
    var productName = document.getElementById('product-name').value;
    var productPrice = document.getElementById('product-price').value;
    var productDetails = document.getElementById('product-details').value;
    var productImage = document.getElementById('product-image');

    var container = document.getElementById('product-container');

    if (productName && productPrice && productDetails && productImage.files && productImage.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Create div element with classes "col-lg-3", "col-md-4", "col-sm-4", "justify-content-center", "text-center", and "mt-5"
            var colDiv = document.createElement("div");
            colDiv.classList.add("col-lg-3", "col-md-4", "col-sm-4", "justify-content-center", "text-center", "mt-5");

            // Create img element with class "img-fluid", src, alt, height, and width
            var imgElement = document.createElement("img");
            imgElement.classList.add("img-fluid");
            imgElement.src = e.target.result;
            imgElement.alt = productName + " Image";
            imgElement.style.height = "70%";
            imgElement.style.width = "70%";

            // Create h4 element with classes "text-uppercase" and "text-center"
            var h4Element = document.createElement("h4");
            h4Element.classList.add("text-uppercase", "text-center");
            h4Element.textContent = productName;

            // Create h6 element with class "text-center"
            var h6Element = document.createElement("h6");
            h6Element.classList.add("text-center");
            h6Element.textContent = "$ " + productPrice;

            // Create p element with class "text-center" for additional product details
            var additionalDetails = document.createElement("p");
            additionalDetails.classList.add("text-center");
            additionalDetails.textContent = productDetails;

            // Create p element with class "icon" and spans with font awesome icons
            var pElement = document.createElement("p");
            pElement.classList.add("icon");
            pElement.innerHTML = '<span><i class="far fa-heart"></i></span>' +
                                 '<span><i id="gap" class="far fa-share-square" title="Share"></i></span>' +
                                 '<span><i id="gap" class="fas fa-shopping-basket"></i></span>';

            // Create div element with class "text-center" containing two buttons
            var buttonDiv = document.createElement("div");
            buttonDiv.classList.add("text-center");
            buttonDiv.innerHTML = '<button class="btn btn-primary mb-5">Buy Now</button>' +
                                  '<button class="btn btn-success mb-5">Add to Cart</button>';

            // Append all elements together
            colDiv.appendChild(imgElement);
            colDiv.appendChild(h4Element);
            colDiv.appendChild(h6Element);
            colDiv.appendChild(additionalDetails);
            colDiv.appendChild(pElement);
            colDiv.appendChild(buttonDiv);

            // Append the newly created column to the container
            container.appendChild(colDiv);
            
        };

        reader.readAsDataURL(productImage.files[0]);

        // Clear form fields after adding the product
        document.getElementById('product-form').reset();
    }
}
