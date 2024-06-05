export default function ProductDetails({params}:{
    params : {productID : string}
}){
    return <h1>
        Details about Product {params.productID}
    </h1>
}