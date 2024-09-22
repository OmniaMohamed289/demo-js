
  var cartona = ``
  for(var i =0 ;i<products.length ;i++){
  cartona+=
  `<div class="col-md-4">
  <div class="shadow py-3 text-center">
      <img src="${products[i].imgUrl}" alt="" width="300" height="300">
      <h4 class="py-3">${products[i].name}</h4>
  </div>
  </div>`
  
  }
  document.getElementById('demo').innerHTML=cartona
var products=[];
if(localStorage.getItem("products")!=null){
    products= JSON.parse(localStorage.getItem('products'))
    var cartona=``
    for(var i=0;i<products.length;i++){
     cartona+=`  
 <tr>  
     <td>${products[i].Name}</td>
     <td>${products[i].price}</td>
     <td>${products[i].des}</td>
 </tr>`
    }
 

}
 function getproduct() {
    var ProdName = document.getElementById("prodName").value
    var prodprie= document.getElementById("prodprice").value
    var proddes= document.getElementById("proddes").value
    var product={
    Name:ProdName,
    price:prodprie,
    des:proddes
   } 
   products.push(product)
   localStorage.setItem("products",JSON.stringify(products))
   console.log(products)
   var cartona=``
   for(var i=0;i<products.length;i++){
    cartona+=`  
<tr>  
    <td>${products[i].Name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].des}</td>
</tr>`
   }
   document.getElementById("demo").innerHTML=cartona
};
var nameht=document.getElementById("prodName")
var priceht=document.getElementById("prodprice")
var descht=document.getElementById("proddes")

function clear(){
    nameht.value=""
    priceht.value=""
    descht.value=""
}
function dispalycartona(){
    var cartona=``
    for(var i=0; i<products.length;i++){
     cartona+=` 
      <tr>
     <td>${products[i].name}</td>
     <td>${products[i].price}</td>
     <td>${products[i].desc}</td>
     <th>
     <button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button>
     <button onclick="updateProduct(${i})" class="btn btn-warning">Update</button>

     </th>
     </tr>
      `
    }
   document.getElementById("demo").innerHTML=cartona 
};
var products=[];
if(localStorage.getItem("products")!=null){
       products= JSON.parse(localStorage.getItem('products'))
       dispalycartona() ; 

}
function getproduct(){
    var pname=nameht.value
    var pprice=priceht.value
    var pdesc=descht.value

    var product={
     name:pname,
     price:pprice,
     desc:pdesc
    }
    if(check(nameht.value&&priceht.value)==true){
        products.push(product)
        localStorage.setItem( "products",JSON.stringify(products))
        console.log(products)
        dispalycartona();
        clear()

    }
    else{ (alert("faild"))}
};
function deleteproduct(index){
    products.splice(index,1)
    localStorage.setItem( "products",JSON.stringify(products))
    dispalycartona();
};
function updateProduct(){
    
};
function search(search){
    var cartona2=``
    for( var i=0 ; i<products.length ; i++){
        if(products[i].name.toLowerCase().includes(search.toLowerCase())){
             cartona2+=` 
              <tr>
             <td>${products[i].name.replace(search,`<span>${search}</span>`)}</td>
             <td>${products[i].price}</td>
             <td>${products[i].desc}</td>
             <th>
             <button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button>
             <button onclick="updateProduct(${i})" class="btn btn-warning">Update</button>
        
             </th>
             </tr>
              `

    }
    }
    document.getElementById("demo").innerHTML=cartona2    

};
// function check(str ,number){
//     var reg= /^[A-Z][a-z]{3,}$/
//     var rgxnum=/^[1-9]{2,5}$/
//     return reg.test(str ,number)


// }