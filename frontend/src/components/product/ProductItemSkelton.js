const ProductItemSkelton = () => {
  return (
    <>
      <div className="m-4 px-6 py-4 w-[270px] min-h-[290px] border border-solid border-[#e6e6e6] shadow-lg rounded-md">
        <div className="w-[150px] h-[150px] mx-auto"></div>
        <p className="mt-2 h-3 rounded-full bg-[#e6e6e6]"></p>
        <p className="mt-3 w-[96px] h-2 rounded-full bg-[#e6e6e6] mb-3"></p>
        <hr className="my-2 border-solid border-[#e6e6e6]" />
        <div className="flex justify-between align-center mt-4">
          <button className="px-4 py-1 bg-[#e6e6e6] mt-1 w-[120px] h-6 rounded-full"></button>
          <p className="mt-0.5"></p>
        </div>
      </div>
    </>
  );
};

export default ProductItemSkelton;
