import { IProducts, IProductsProps } from "../../types";

function Products({ productData }: IProductsProps) {
    return (
        <section className="container-produk">
            {productData.length > 0 ? (
                productData.map((productse: IProducts) => (
                    <div className="produk">
                        <div className="card"></div>
                        <div className="img-produk">
                            <img src="./src/assets/img/baju.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>{productse.name}</h2>
                                <span>{productse.description}</span>
                                <div className="data">
                                    <h3>Rp. {productse.price}</h3>
                                </div>
                                <div className="dataBtn">
                                    <button>Read More!</button>
                                    <button>Buy Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <span>"cards is not existed yet"</span>
            )}
        </section>
    );
}

export default Products;
