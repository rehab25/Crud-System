        
    let inputName = document.getElementById("productName"),
         inputCategory = document.getElementById("productCategory"),
         inputQuantity = document.getElementById('productQuantity'),
         inputPrice = document.getElementById("productPrice"),

         inputDesc = document.getElementById("productDescription"),
         

         tbody = document.getElementById("tbody"),
         allTotalPrices = document.getElementById('allPrices');
         
    let inputSearch = document.getElementById("searchInput");
    
    let addBtn = document.getElementById("addBtn"),
        updateBtn = document.getElementById("updateBtn");

        updateBtn.style.display = 'none';

    let alertForm = document.getElementById('alertForm');

let updatebtnn = document.getElementById('updatebtnn');
let updatedIndex= 0;













function removeValidAndInvalid(){
    inputName.classList.remove('is-invalid');
    inputName.classList.remove('is-valid');

    inputCategory.classList.remove('is-invalid');
    inputCategory.classList.remove('is-valid');

    inputPrice.classList.remove('is-invalid');
    inputPrice.classList.remove('is-valid');

    inputQuantity.classList.remove('is-invalid');
    inputQuantity.classList.remove('is-valid');

    inputDesc.classList.remove('is-invalid');
    inputDesc.classList.remove('is-valid');
}

if (localStorage.getItem("productData") == null){
    productList = [];

} else{
    var productList = JSON.parse(   localStorage.getItem("productData")            );
}
 





displayProduct();


function addProduct (){
    if(validateProductName() == true && validateProductCategory() == true && validateProductPrice() == true && inputQuantity.value !='' && validateProductDesc() == true ){    
        let singleProduct = {
            productName :inputName.value,
            productCategory :inputCategory.value ,

            productQuantity : inputQuantity.value,
            productPrice : inputPrice.value  ,
            productTotalPrice :  inputPrice.value  *  inputQuantity.value,

            productDesc :inputDesc.value
        };
        productList.push(singleProduct);

        var str = JSON.stringify(productList);
        localStorage.setItem("productData",str);

        removeValidAndInvalid();   
        allPricesProduct();

        displayProduct();
        //console.log(productList); 
        clearForm();

    }
    else{
        alert('please enter all data correctly');
    }
}


function clearForm() {
    inputName.value = "";
    inputCategory.value = "";
    inputPrice.value = "";
    inputQuantity.value = "";
    inputDesc.value = "";

    alertForm.classList.add('d-none');

    removeValidAndInvalid();
}

    
function displayProduct(){
    let str = "";

    for(var i=0; i<productList.length; i++)
    {
        if(productList[i].productName !== '')
        {

        str += `
        <tr>
            <td>${i+1}</td>
            <td>${productList[i].productName}</td>
            <td>${productList[i].productCategory}</td>
            <td>${productList[i].productQuantity}</td>
            <td>${productList[i].productPrice}</td>
            <td>${productList[i].productTotalPrice}</td>

            <td>${productList[i].productDesc}</td>

            <td><button type="button" onclick="btnPlus(${i})" class="btn btn-success">+</button> 
            <button type="button" onclick="btnMinus(${i})" class="btn btn-dark">-</button>  </td>



            <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
        </tr>
        `
        console.log('ww')
        }
        else{

            str += `
            <tr>
                <td>${i+1}</td>
                <td>${productList[i].productName}</td>
                <td>${productList[i].productCategory}</td>
                <td>${productList[i].productQuantity}</td>
                <td>${productList[i].productPrice}</td>
                <td>${productList[i].productTotalPrice}</td>
    
                <td>${productList[i].productDesc}</td>
    
                
                <td></td>
        
                <td></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>

            </tr>
            `
            console.log('fff')
        }
    }        
    tbody.innerHTML = str;
// console.log(str);
}
function btnPlus(pIndex){
    if(  productList[pIndex].productName != ''      ){
        var newQuantity =Number( productList[pIndex].productQuantity )+1;

    productList[pIndex].productQuantity = newQuantity;
    productList[pIndex].productPrice = productList[pIndex].productPrice;
    productList[pIndex].productTotalPrice = newQuantity * productList[pIndex].productPrice;

    // productList[pIndex].productDesc = productList[pIndex].productDesc;


     var str = JSON.stringify(productList);
     localStorage.setItem("productData",str);       

    }
        
    allPricesProduct();
     displayProduct();

}



function btnMinus(pIndex){
    if(  productList[pIndex].productName != ''      ){

    // console.log(pIndex)
         if(Number( productList[pIndex].productQuantity ) > 0){
              console.log( Number( productList[pIndex].productQuantity   ),'>0')
              var newQuantity =Number( productList[pIndex].productQuantity ) -1;
  
        productList[pIndex].productQuantity = newQuantity;
        productList[pIndex].productPrice = productList[pIndex].productPrice;
        productList[pIndex].productTotalPrice = newQuantity * productList[pIndex].productPrice;
    
        // productList[pIndex].productDesc = productList[pIndex].productDesc;
    
    
         var str = JSON.stringify(productList);
         localStorage.setItem("productData",str);           
    
         allPricesProduct();
         displayProduct();

    } else{
        console.log('hena n3ml el delete ll row');
        deleteProduct(pIndex);
    }
   
}
}


function deleteAllProducts(){
    if(       prompt('Are you sure you want to delete all Data')    ){

    localStorage.removeItem('productData');
    productList = [];
    allTotalPrices.innerText=0;
    displayProduct();
    console.log('deleteAllProducts')
    }
}

// function paidProduct(pIndex){
//     if(productList[pIndex].productName !== ''){
      


//     productList[pIndex].productName = '';
//     productList[pIndex].productCategory = '';
//     productList[pIndex].productQuantity = '';
//     productList[pIndex].productPrice = '';
//     productList[pIndex].productTotalPrice = '';
//     productList[pIndex].productDesc = '';



    
//     var str = JSON.stringify(productList);
//     localStorage.setItem("productData",str);           

// // tbody.pIndex= '';
//     // console.log('mish')



//     // console.log(pIndex)
//     // console.log(       productList[pIndex]       )

// }
// else{
//     pIndex =0;
//     // updatebtnn.display = none;

//     //  let strNum = String(pIndex);
//     //  strNum = '';
//     // console.log(typeof(strNum));

//     console.log('da fadi')
//     console.log(pIndex);
// }
// allPricesProduct();
// displayProduct();

// }




// function allPricesProduct(){
//     for(let i=0; productList.length; i++){


//       console.log(i)



//     console.log('wa7da wa7da')
// }



// }


 
function allPricesProduct(){
    let z = 0;
    for(var i=0; i<productList.length; i++)
    {
     
     z += Number( productList[i].productTotalPrice     );
     allTotalPrices.innerText =z
        console.log(z)
       
    }        
// console.log(str);
}

allPricesProduct();
function searchProduct(){
    let str = "";
    for(var i=0; i<productList.length; i++){
        if(       productList[i].productName.includes(inputSearch.value)   ){
            if(productList[i].productName != ''){

                console.log( )
                str += `
                <tr>
                    <td>${i}</td>
                    <td>${productList[i].productName}</td>
                    <td>${productList[i].productCategory}</td>
    
                    <td>${productList[i].productQuantity}</td>
                    <td>${productList[i].productPrice}</td>
                    <td>${productList[i].productTotalPrice}</td>
    
                    <td>${productList[i].productDesc}</td>
    
                    <td><button type="button" onclick="btnPlus(${i})" class="btn btn-success">+</button> 
                    <button type="button" onclick="btnMinus(${i})" class="btn btn-dark">-</button>  </td>
    
    
    
                <td><button onclick="updateProduct(${i})" class="btn btn-warning" >update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
                </tr>
                `
            }
            else{
                str += `
                <tr>
                    <td>${i}</td>
                    <td>${productList[i].productName}</td>
                    <td>${productList[i].productCategory}</td>
    
                    <td>${productList[i].productQuantity}</td>
                    <td>${productList[i].productPrice}</td>
                    <td>${productList[i].productTotalPrice}</td>
    
                    <td>${productList[i].productDesc}</td>
    
                    <td></td>
        
                    <td></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button></td>
                    <td></td>





                </tr>
                `
            }


        tbody.innerHTML = str;

        console.log( productList[i].productName ,(inputSearch.value) )



    }
    else{
        console.log(str)
         tbody.innerHTML =str
        console.log('mafish');
    }    
    // console.log(inputSearch.value);
}
}
// alert('Are you sure you want to delete this row')
function deleteProduct (pIndex){
    
    if(       prompt('Are you sure you want to delete this row')    ){
        productList.splice(pIndex,1);

        var str = JSON.stringify(productList);
        localStorage.setItem("productData",str);
    
        clearForm();
        addBtn.style.display = 'inline-block';
        updateBtn.style.display = 'none';
    
        // inputName.removeAttribute('readonly');
        // inputName.style.backgroundColor = "#fff"
        // inputName.style.color = "#000"

    }
   
    allPricesProduct();
    displayProduct();
    
    
}
function updateProduct(pIndex){
    inputName.value = productList[pIndex].productName;
    inputCategory.value = productList[pIndex].productCategory;

    inputQuantity.value = productList[pIndex].productQuantity;
    inputPrice.value = productList[pIndex].productPrice;
    inputDesc.value = productList[pIndex].productDesc;

    addBtn.style.display = 'none';
    updateBtn.style.display = 'inline-block';

    // inputName.setAttribute('readonly','true');
    // inputName.style.backgroundColor = "#666"
    // inputName.style.color = "#444"
    // console.log(pIndex);
updatedIndex= pIndex;
}


function updateAddedProduct(){
    
    for(var i=0;i<productList.length;i++){
        if(productList[updatedIndex].productName == productList[i].productName && validateProductName() == true && validateProductCategory() == true && validateProductPrice() == true && inputQuantity.value !='' && validateProductDesc() == true){

            // if(validateProductName() == true && validateProductCategory() == true && validateProductPrice() == true && inputQuantity.value !='' && validateProductDesc() == true ){    

            productList[i].productName =inputName.value,
            productList[i].productCategory =inputCategory.value ;

            productList[i].productQuantity =inputQuantity.value,
            productList[i].productPrice =inputPrice.value,

            productList[i].productTotalPrice = inputQuantity.value * inputPrice.value
            productList[i].productDesc =inputDesc.value ;



            var str = JSON.stringify(productList);
            localStorage.setItem("productData",str);  


            // }
           
            
            allPricesProduct();          
            displayProduct();

            clearForm();        
                
            addBtn.style.display = 'inline-block';
            updateBtn.style.display = 'none';
            // inputName.removeAttribute('readonly');
            // inputName.style.backgroundColor = "#fff"
            // inputName.style.color = "#000"
            } 
        else{
            console.log('eror');
            }
        }
}








function validateProductName(){
    let regexName = /^[A-Z][A-Za-z0-9]{3,30}$/ ; 
    let isMatch = regexName.test(inputName.value);
    if(isMatch == true){
        inputName.classList.remove('is-invalid');
        inputName.classList.add('is-valid');
        alertForm.classList.add('d-none');

        addBtn.removeAttribute('disabled');
        return true;
        // alert('true')
    }
    else{
        inputName.classList.add('is-invalid');
        inputName.classList.remove('is-valid');
        alertForm.classList.remove('d-none');

        addBtn.setAttribute('disabled','true');

        return false;

        // alert('false');
    }

}
    // validateProductName();
    inputName.addEventListener('keyup', validateProductName);





function validateProductCategory(){
    var regexCategory = /^[A-Za-z][A-Za-z0-9]{3,19}$/ ; 
    var isMatchCategory = regexCategory.test(inputCategory.value);
    
    if(isMatchCategory == true){
        inputCategory.classList.remove('is-invalid');
        inputCategory.classList.add('is-valid');

        return true;
    }
    else{ 
        inputCategory.classList.add('is-invalid');
        inputCategory.classList.remove('is-valid');

        return false;
    }  
}
    // validateProductCategory();
    inputCategory.addEventListener('keyup', validateProductCategory);




function validateProductPrice(){
    let regexPrice = /^[0-9]{1}[1-9]{1,}[0-9]{2,5}$/ ;
    let isMatchPrice = regexPrice.test(inputPrice.value);
    if(isMatchPrice == true ){ 
        inputPrice.classList.remove('is-invalid');
        inputPrice.classList.add('is-valid');

        return true;
    }
    else{
        inputPrice.classList.add('is-invalid');
        inputPrice.classList.remove('is-valid');

        return false;
    }  
}
    // validateProductPrice();
    inputPrice.addEventListener('keyup', validateProductPrice);




function validateProductDesc(){
    let regexDesc = /^[A-Za-z][A-Za-z0-9]{3,19}$/ ;

    let isMatchDesc = regexDesc.test(inputDesc.value);
    if(isMatchDesc == true ){    
        inputDesc.classList.remove('is-invalid');
        inputDesc.classList.add('is-valid');

        return true;    
    }
    else{
        inputDesc.classList.add('is-invalid');
        inputDesc.classList.remove('is-valid');

        return false;
    }
}
    // validateProductDesc();
    inputDesc.addEventListener('keyup', validateProductDesc);
