const OrderDetails = () => {
  return (
    <>
      <div className="p-5 lg:p-10  border border-[#e6e6e6]">
        <h2 className="text-[24px]">Your Order</h2>
        <p className="text-[14px] font-medium mt-3 mb-6">Product</p>
        <div className="text-[14px] flex justify-between items-center py-2 border-y border-[#e6e6e6]">
          <p className=" font-medium my-2">Aminomax Pet Syrup 200Ml × 1</p>
          <p>990.00LKR</p>
        </div>
        <div className="text-[14px] flex justify-between items-center py-2 border-b border-[#e6e6e6]">
          <p className="font-medium my-2">Subtotal</p>
          <p>990.00LKR</p>
        </div>
        <div className="text-[14px] flex justify-between items-center py-2">
          <p className="font-medium my-2">Total</p>
          <p>990.00LKR</p>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
