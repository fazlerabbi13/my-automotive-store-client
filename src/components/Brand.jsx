import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { img_url, name, id } = brand;
    return (
        <>
            <Link to={`/brand/${brand.name}`}>
                <div className="card border w-72 h-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img_url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Brand;