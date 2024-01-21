import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { img_url, brandName, id } = brand;
    return (
        <>
            <Link to='/brandProducts'>
                <div className="card border w-72 h-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img_url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{brandName}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Brand;