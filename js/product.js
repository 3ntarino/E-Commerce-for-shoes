const allProducts = {
    /* --------------------- NIKE --------------------- */
    n1: {
        name: "Nike Air Jordan 1 High (Green-White)",
        price: "$249.00",
        image: "shoes/nike shoes/Nike Air Jordan 1 High (GreenWhite).png"
    },
    n2: {
        name: "Nike Air Force 1 High (Black-White)",
        price: "$249.00",
        image: "shoes/nike shoes/Nike Air Force 1 High (BlackWhite).png"
    },
    n3: {
        name: "Nike Air Jordan 1 High (Blue-Red)",
        price: "$249.00",
        image: "shoes/nike shoes/Nike Air Jordan 1 Mid (BlueRed).png"
    },
    n4: {
        name: "Air Jordan 1 Retro High",
        price: "$259.00",
        image: "shoes/nike shoes/Air Jordan 1 Retro High.png"
    },
    n5: {
        name: "Nike Air Force 1 Low",
        price: "$149.00",
        image: "shoes/nike shoes/Nike Air Force 1 Low.png"
    },
    n6: {
        name: "Nike Air Jordan 1 High (OrangeBlack)",
        price: "$249.00",
        image: "shoes/nike shoes/Nike Air Jordan 1 High (OrangeBlack).png"
    },
    n7: {
        name: "Nike Air Jordan 1",
        price: "$199.00",
        image: "shoes/nike shoes/Nike Air Jordan 1.png"
    },
    n8: {
        name: "Nike Toddler Dunk Low",
        price: "$219.00",
        image: "shoes/nike shoes/Nike Toddler Dunk Low.png"
    },
    n9: {
        name: "Nike Unisex-Child Modern",
        price: "$249.00",
        image: "shoes/nike shoes/Nike Unisex-Child Modern.png"
    },
    n10: {
        name: "Nike Air Max 95 (Black-Yellow)",
        price: "$189.00",
        image: "shoes/nike shoes/Nike Air Max 95 (BlackYellow).png"
    },
    /* --------------------- ADIDAS --------------------- */
    a1: {
        name: "adidas Men's Ultraboost (Black)",
        price: "$199.00",
        image: "shoes/adidas shoes/adidas Men_s Ultraboost (Black).png"
    },
    a2: {
        name: "adidas Men's Ultraboost (White)",
        price: "$199.00",
        image: "shoes/adidas shoes/adidas Men_s Ultraboost (White).png"
    },
    a3: {
        name: "adidas Men's Ultraboost Light",
        price: "$179.00",
        image: "shoes/adidas shoes/adidas Men_s Ultraboost Light.png"
    },
    a4: {
        name: "adidas Men's Ultraboost",
        price: "$159.00",
        image: "shoes/adidas shoes/adidas Men_s Ultraboost.png"
    },
    a5: {
        name: "adidas Men's Ultraboost 23 Sneaker (Blue)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (Blue).png"
    },
    a6: {
        name: "adidas Men's Ultraboost 23 Sneaker (Gray)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (Gray).png"
    },
    a7: {
        name: "adidas Men's Ultraboost 23 Sneaker (Green)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (Green).png"
    },
    a8: {
        name: "adidas Men's Ultraboost 23 Sneaker (Pink)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (Pink).png"
    },
    a9: {
        name: "adidas Men's Ultraboost 23 Sneaker (White-Yellow)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (White-Yellow).png"
    },
    a10: {
        name: "adidas Men's Ultraboost 23 Sneaker (White)",
        price: "$189.00",
        image: "shoes/adidas shoes/adidas Women_s Ultraboost 23 Sneaker (White).png"
    },
    /* --------------------- CONVERSE --------------------- */
    c1: {
        name: "Converse Chuck Taylor All Star (Black-White)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Black-White).png"
    },
    c2: {
        name: "Converse Chuck Taylor All Star (Blue)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Blue).png"
    },
    c3: {
        name: "Converse Chuck Taylor All Star (Green)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Green).png"
    },
    c4: {
        name: "Converse Chuck Taylor All Star (Pink)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Pink).png"
    },
    c5: {
        name: "Converse Chuck Taylor All Star (Purple)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Purple).png"
    },
    c6: {
        name: "Converse Chuck Taylor All Star (Red)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Red).png"
    },
    c7: {
        name: "Converse Chuck Taylor All Star (Sky Blue)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Sky Blue).png"
    },
    c8: {
        name: "Converse Chuck Taylor All Star (White)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (White).png"
    },
    c9: {
        name: "Converse Chuck Taylor All Star (Yellow)",
        price: "$189.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star (Yellow).png"
    },
    c10: {
        name: "Converse Chuck Taylor All Star High (Black-White)",
        price: "$199.00",
        image: "shoes/converse shoes/Converse Chuck Taylor All Star High(Black-White).png"
    },
    /* --------------------- PUMA --------------------- */
    p1: {
        name: "Puma RS-X Reinvention (Black-Pink)",
        price: "$249.00",
        image: "shoes/puma shoes/Puma RSX Reinvention (Black-Pink).png"
    },
    p2: {
        name: "Puma RS-X Reinvention (Paige)",
        price: "$249.00",
        image: "shoes/puma shoes/Puma RSX Reinvention (Paige).png"
    },
    p3: {
        name: "Puma RS-X Reinvention (White)",
        price: "$249.00",
        image: "shoes/puma shoes/Puma RSX Reinvention (White).png"
    },
    p4: {
        name: "Puma X BMW",
        price: "$299.00",
        image: "shoes/puma shoes/Puma X BMW.png"
    },
    p5: {
        name: "Puma X Ferrari",
        price: "$289.00",
        image: "shoes/puma shoes/Puma X Ferrari.png"
    },
    /* --------------------- Under Armour --------------------- */
    u1: {
        name: "Under Armour Charged Vantage (Black)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Black).png"
    },
    u2: {
        name: "Under Armour Charged Vantage (Grey)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Grey).png"
    },
    u3: {
        name: "Under Armour Charged Vantage (Orange)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Orange).png"
    },
    u4: {
        name: "Under Armour Charged Vantage (Pink)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Pink).png"
    },
    u5: {
        name: "Under Armour Charged Vantage (Purple)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Purple).png"
    },
    u6: {
        name: "Under Armour Charged Vantage (Red)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Red).png"
    },
    u7: {
        name: "Under Armour Charged Vantage (White)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (White).png"
    },
    u8: {
        name: "Under Armour Charged Vantage (Black-White)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Black-White).png"
    },
    u9: {
        name: "Under Armour Charged Vantage (Blue-White)",
        price: "$149.00",
        image: "shoes/under armour shoes/Under Armour Charged Vantage (Blue-White).png"
    }
};

const productID = localStorage.getItem("selectedProduct");
const p = allProducts[productID];
if (p) {
    document.getElementById("productImage").src = "../photos/" + encodeURI(p.image);
    document.getElementById("productName").textContent = p.name;
    document.getElementById("productPrice").textContent = p.price;
} else {
    document.getElementById("productName").textContent = "Product Not Found";
}

let selectedSize = null;
const sizeButtons = document.querySelectorAll('.see-more');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedSize = button.textContent;
    });
});

document.getElementById("addToCartBtn").addEventListener("click", () => {
    const size = selectedSize;
    const quantity = parseInt(document.getElementById("productQuantity").value);
    if (!size) {
        alert("⚠ Please select a size first!");
        return;
    }
    if (quantity < 1) {
        alert("⚠ Quantity must be at least 1!");
        return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
        id: productID,
        name: p.name,
        price: p.price,
        image: p.image,
        size: size,
        quantity: quantity
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("added to cart");
});
function loadYouMayLike() {
    const likeBox = document.getElementById("likeProducts");
    const brandLetter = productID[0];
    const brandProducts = Object.keys(allProducts).filter(id => id[0] === brandLetter && id !== productID);
    const suggested = brandProducts.slice(0, 3);
    likeBox.innerHTML = "";
    suggested.forEach(id => {
        const item = allProducts[id];
        likeBox.innerHTML += `
            <div class="like-card" onclick="openProduct('${id}')">
                <img src="../photos/${encodeURI(item.image)}" />
                <h4>${item.name}</h4>
                <span class="price">${item.price}</span>
            </div>
        `;
    });
}
function openProduct(id) {
    localStorage.setItem("selectedProduct", id);
    window.location.reload();
}
loadYouMayLike();

document.addEventListener('DOMContentLoaded', () => {
    const headerProfileImg = document.getElementById('header-profile-img');
    const savedData = JSON.parse(localStorage.getItem('profileData'));
    if (savedData && savedData.profilePic) {
        headerProfileImg.src = savedData.profilePic;
    }
});

document.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        let rect = e.target.getBoundingClientRect();
        e.target.style.setProperty("--x", e.clientX - rect.left + "px");
        e.target.style.setProperty("--y", e.clientY - rect.top + "px");
    }
});