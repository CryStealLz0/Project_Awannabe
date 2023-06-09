import { IJudul, IJudulProps } from "../../types";

function judul({ judulData }: IJudulProps) {

    return (
        <div className="kotak">
            <div className="kotak-card">
                    <div className="card">
                        <button>Read More</button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            <div className="kotak-isi">
            
            {judulData.length > 0 ? (
                judulData.map((productse: IJudul) => (
                    <div className="kotak-card-isi">
                            <div className="card-isi">
                                <div className="isi">
                                    <h3>{productse.judul}</h3>
                                    <p>
                                    {productse.isi}
                                    </p>
                                </div>
                            </div>
                    </div>
                ))
            ) : (
                <span>"cards is not existed yet"</span>
            )}
            </div>
           
            
        </div>
    );
}

export default judul;

