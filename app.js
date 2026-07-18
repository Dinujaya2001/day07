// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revArr = customerList.reverse();
// console.log(customerList);




// let inStockItems = products.filter(
//     function(product){
//         return productFilter(product)
//     }
// )

// function productFilter(product){
//     return product.inStock == true;
// }

// console.log(inStockItems);

// step 1

// function getSum(num1,num2){
//     return num1+num2;
// }

// console.log(10,20);

//step 2 

// let getSum = function (num1 , num2){
//     return num1+num2;
// }
// console.log(10,20);

// step 3
// let getSum = (num1 , num2) =>{
//     return num1+num2;
// }
// console.log(10,20);

// step 4

// let getSum = (num1 , num2) => num1 + num2 ;

// console.log(10,20);


//set 5

// let name = textValue => {
//     return textValue;
// }

// console.log(name("Hi Tharaka"));


//step 6 

// let name = textValue => textValue;

// console.log(name("Hi Saman") );

const products = [
    {name:"bun" ,inStock :true},
    {name:"bat" ,inStock :false},
    {name:"ball" ,inStock :false},
    {name:"car" ,inStock :true}
];

let inStockItems = products.filter(product =>product.inStock==true);
console.log(inStockItems);

products.forEach(product =>console.log(product));


