export const Products = ({product}) => {
    return (
        <div className="flex flex-col border">
            <div>
                <p>{product.name}</p>
            </div>
            <div className="flex gap-8px">
                <p>Price - {product.newprice} || </p>
                <p>Rating - {product.rating} || </p>
                <p>Dicount - {product.discount}</p>
            </div>
            <div>
                <button> Add to Cart</button>
            </div>
        </div>
    )
}