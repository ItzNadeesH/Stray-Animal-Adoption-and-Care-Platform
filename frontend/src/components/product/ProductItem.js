import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="m-4 px-6 py-4 w-[270px] min-h-[290px] border border-solid border-[#e6e6e6] shadow-lg rounded-md animate-fadeOut">
        <img
          className="w-[150px] h-[150px] mx-auto"
          src={product.image}
          alt="Product-item"
        />
        <p className="mb-1">{product.name}</p>
        <p className="text-[12px] text-[#8d8d8d] mb-2">
          {product.manufacturer}
        </p>
        <hr className="my-2 border-solid border-[#e6e6e6]" />
        <div className="flex justify-between align-center mt-4">
          <Link to={`/store/product/${product._id}`}>
            <button className="px-4 py-1 text-[14px] text-[#ffffff] bg-cyan-blue hover:bg-[#000000] transition rounded-full">
              View Product
            </button>
          </Link>
          <p className="mt-0.5">{product.price}LKR</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
