// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revArr = customerList.reverse();
// console.log(customerList);

const products = [
    {name:"bun" ,inStock :true},
    {name:"bat" ,inStock :false},
    {name:"ball" ,inStock :false},
    {name:"car" ,inStock :true}
];


let inStockItems = products.filter(
    function(product){
        return productFilter(product)
    }
)

function productFilter(product){
    return product.inStock == true;
}

console.log(inStockItems);
