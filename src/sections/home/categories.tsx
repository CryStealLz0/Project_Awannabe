import { ICategory, ICategoryProps } from "../../types";

function Categories({ categoryData }: ICategoryProps) {
    return (
        <section className="container">
            <div className="container-card">
                {categoryData.length > 0 ? (
                    categoryData.map((category: ICategory) => (
                        <div className="box">
                            <span></span>
                            <div className="content">
                                <h2>{category.headline}</h2>
                                <p>{category.content}</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <span>"cards is not existed yet"</span>
                )}
            </div>
        </section>
    );
}

export default Categories;
