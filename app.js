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

// const products = [
//     {name:"bun" ,inStock :true},
//     {name:"bat" ,inStock :false},
//     {name:"ball" ,inStock :false},
//     {name:"car" ,inStock :true}
// ];

// let inStockItems = products.filter(product =>product.inStock==true);
// console.log(inStockItems);

// products.forEach(product =>console.log(product));


// const letterList = ["B","F","A","U","E"];

// let sorts = letterList.toSorted();
// console.log(sorts);


// const employeeSalary =[100000,550000,65000,80000,75000];

// let newEmployeeSalary = employeeSalary.map(salary => salary*2);

// console.log(newEmployeeSalary);


// const studentList = [
//     {id:"001",name:"Tharaka"},
//     {id:"002",name:"Garuka"},
//     {id:"003",name:"Tharuka"},
//     {id:"004",name:"Sanuka"},
//     {id:"005",name:"Gyanuka"},
//     {id:"006",name:"Lakshika"}
// ];

// let findStudent = studentList.find(student => student.id==="004");
// console.log(findStudent);



//-----------------------------------JSON-(Javascript object notetion)---------------------------------------------------------------------


fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => {
    console.log(data);



    let card = document.getElementById("card");

    let body = ""

    data.forEach(element => {
        body += `
         <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <div>
           <div class="d-flex justify-content-between align-items-center">
            <h6 class="card-title mb-0">${element.category}</h6>
            <h6 class="mb-0">${element.rating.rate}/${element.rating.count}</h6>
            </div>
            <a href="#" class="btn btn-primary">Buy Now ${element.price}</a>
        </div>

    
    `

    });

    card.innerHTML = body;



})
























