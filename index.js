const hamburgerMenu = document.querySelector('#hamburger-icon');
const mobileMenu = document.querySelector('#mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    console.log('clicked');
    mobileMenu.classList.toggle('active');
})


// const fetchItems = async () => {

//     const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '7d03974165msh22c9f37b822fb7ap12058cjsn8b8f5fa36d70',
//             'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         displayItems(result);
//     } catch (error) {
//         console.error(error);
//     }
// }




// const displayItems = (data) => {
//     const productList = document.getElementById('product-list');

//     if (!data || !data.results){
//         productList.innerHTML = '<h2>No items found</h2>';
//         return;
//     }

//     data.results.forEach(product => {
//         const item = document.createElement('div');
//         item.innerHTML = `
//             <h2>${product.name}</h2>
//             <p>Price: ${product.price || "N/A"}</p>
//             <img src="${product.allArticleBaseImages[0]}"
//             alt="${product.name}" width="150">
//             <hr>
//         `;
//         productList.appendChild(item);
//     });
// }

// fetchItems();