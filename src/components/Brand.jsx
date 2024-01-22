import { Link } from "react-router-dom";

const Brand = ({ oneBrand }) => {
    const { img_url, brand,id } = oneBrand;
    return (
        <>
            <Link to={`/brandProducts/${brand}`}>
                <div className="card border w-72 h-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img_url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brand}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Brand;