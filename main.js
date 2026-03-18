


 function TopRatedProductContainer() {
  const card = document.querySelector('.top-rated-product-container');
  if(!card) return;

    topRatedProduct.filter(p => p.rating === 5)
      .forEach(TopRatedProduct => {
        card.innerHTML += 
          ` <div class='card-container'>
              <div class='card'>

                <div class="card-img-container">
                  <img src=${TopRatedProduct.image} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${TopRatedProduct.description}</p>
                </div>

                <div class="card-price">
                  <p>${TopRatedProduct.price}</p>
                </div>                
              </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${TopRatedProduct.link}>${TopRatedProduct.button}</a>
                </div>
              
              

            </div>
   `;
             
      });
 }  

 TopRatedProductContainer();

 

 function highlyRecommendedProductContainer () {

  const card = document.querySelector('.highly-recommended-product-container');
  if(!card) return;
  
  highlyRecommendedProduct.filter(p => p.category === 'highly recommended')
    .forEach(highlyRecommendedProduct => {
      card.innerHTML +=
      ` <div class='card-container'>
              <div class='card'>

                <div class="card-img-container">
                  <img src=${highlyRecommendedProduct.image} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${highlyRecommendedProduct.description}</p>
                </div>

                <div class="card-price">
                  <p>${highlyRecommendedProduct.price}</p>
                </div>                
              </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${highlyRecommendedProduct.link}>${highlyRecommendedProduct.button}</a>
                </div>
              
              

            </div>
   `
    });
 };

 highlyRecommendedProductContainer();
 
 


function mapProducts() {

  const  params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const productCard = document.querySelector('.products')
  if(!productCard) return;

  Product.filter(product => product.category === category  || product.filterCat === category)
    .forEach(Product => {
      productCard.innerHTML +=
      ` <div class='card-container'>
              <div class='card'>

                <div class="card-img-container">
                  <img src=${Product.image} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${Product.description}</p>
                </div>

                <div class="card-price">
                  <p>${Product.price}</p>
                </div>                
               </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${Product.link}>${Product.button}</a>
                </div>
              
             

            </div>
   `
  });
 };

 mapProducts();


 function mapBanners() {

  const  params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const banner = document.querySelector('.banner-container')
  if(!banner) return;

   banners.filter(banners => banners.category === category  || banners.filterCat === category  || banners.filterCat2 === category  || banners.filterCat3 === category  || banners.filterCat4 === category  )
    .forEach(banners => {
      banner.innerHTML +=
      ` 
                  <img src=${banners.bannerImg} class='banner' alt=""/> 
               
   `
  });
 };

 mapBanners();









 function mapSeasonalProducts() {

  const  params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const productCard = document.querySelector('.products')
  if(!productCard) return;

   SeasonalProduct.filter(product => product.category === category)
    .forEach(Product => {
      productCard.innerHTML +=
      ` <div class='card-container'>
              <div class='card'>

                <div class="card-img-container">
                  <img src=${Product.image} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${Product.description}</p>
                </div>

                <div class="card-price">
                  <p>${Product.price}</p>
                </div>                
              </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${Product.link}}>${Product.button}</a>
                </div>
              
              

            </div>
   `
  });
 };

 mapSeasonalProducts();

  function mapSearchedProducts() {

  const  params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const searchedDisplay = document.querySelector('.searched-product-container');
    if(!searchedDisplay) return;

    const sProduct = Product.find( product => product.id == id )

    searchedDisplay.innerHTML = `
    <div class='card-container'>
              <div class='card'>
                
                <div class="card-img-container">
                  <img src=${sProduct.image} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${sProduct.description}</p>
                </div>

                <div class="card-price">
                  <p>${sProduct.price}</p>
                </div>                
              </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${sProduct.link}>${sProduct.button}</a>
                </div>
              
              

            </div>
    `
  
  };
;

 mapSearchedProducts();


  function blogTitle () {

  const  params = new URLSearchParams(window.location.search);
  const blogPost = params.get("blogPost");

  const blogPostMap = document.querySelector('.blog-post-container');
  if(!blogPostMap) return;
  
  BlogPosts.filter( post => post.blogPost === blogPost)
    .forEach(post => {
      blogPostMap.innerHTML +=
      `
      
     <div>
      <h1 class="blog-post-title">${post.title}</h1>
     </div>

     <div>
     <h3>${post.subtitle1}</h3>
     <p class='blog-paragraph'>${post.paragraph1}</p>
     </div>

     <div>
     <h3>${post.subtitle2}</h3>
     <p class='blog-paragraph'>${post.paragraph3}</p>
     </div>

     <div>
     <h3>${post.subtitle3}</h3>
     <p class='blog-paragraph'>${post.paragraph3}</p>
     </div>

     <div>
     <h3>${post.subtitle4}</h3>
     <p class='blog-paragraph'>${post.paragraph4}</p>
     </div>

     <div>
     <h3>${post.subtitle5}</h3>
     <p class='blog-paragraph'>${post.paragraph5}</p>
     </div>

     <div>
     <h3>${post.subtitle6}</h3>
     <p class='blog-paragraph'>${post.paragraph6}</p>
     </div>

     <div>
     <h3>${post.subtitle7}</h3>
     <p class='blog-paragraph'>${post.paragraph7}</p>
     </div>

     <div>
     <h3>${post.subtitle8}</h3>
     <p class='blog-paragraph'>${post.paragraph8}</p>
     </div>
   
     <div>
     <h3>${post.subtitle9}</h3>
     <p class='blog-paragraph'>${post.paragraph9}</p>
     </div>
     
<div class='blog-card-container'>
     <div>
              <div class='card'>

                <div class="card-img-container">
                  <img src=${post.cardimg1} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${post.card1description}</p>
                </div>

                <div class="card-price">
                  <p>${post.card1price}</p>
                </div>                
               </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${post.bloglink1}>${post.card1button}</a>
                </div>
          </div>
          <div class='seperate-card'>
                 <div class='card'>

                <div class="card-img-container">
                  <img src=${post.cardimg2} alt=""/> 
                </div>

                <div class="card-description">
                  <p>${post.card2description}</p>
                </div>

                <div class="card-price">
                  <p>${post.card2price}</p>
                </div>                
               </div>
                <div class="check-it-out-btn-container">
                  <a class="check-it-out-btn" href=${post.bloglink2}>${post.card2button}</a>
                </div>
              </div>
             
              </div>
            </div>
    `
    });
 };

 blogTitle();

const searchByProduct = document.querySelector('.search-by-product');
if(searchByProduct){
searchByProduct.addEventListener('click' , ()=> {
  const container = document.querySelector('.hide');
    container.classList.toggle('search-by-product-list-container');
});
}
const exitSearchByProduct = document.querySelector('.exit-search-by-product');

if(exitSearchByProduct){
exitSearchByProduct.addEventListener('click' , ()=> {
  const container = document.querySelector('.hide');
    container.classList.toggle('search-by-product-list-container');
});
}


const searchByProductLink = document.querySelector('.search-link');

if(searchByProductLink){
searchByProductLink.addEventListener('click' , ()=> {
  const container = document.querySelector('.hide');
    container.classList.toggle('search-by-product-list-container');
});
}

const searchInput = document.querySelector('#searchInput');
const resultsBox = document.querySelector('#searchResults');


const searchAllInput = document.getElementById("searchInput");

if(searchAllInput){

searchAllInput.addEventListener("keydown", function(e){

if(e.key === "Enter"){

const searchValue = searchAllInput.value.trim();

if(searchValue !== ""){
window.location.href =
`SearchedProducts.html?search=${encodeURIComponent(searchValue)}`;
}

}

});

}