import React from 'react';
import { useProduct } from '../../hooks/useProduct';
import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../../reducers/cartSlice';
import deleteIcon from '../../assets/icons/icon-delete.svg';

const CartTabItem = ({ product }) => {
  const { data, isLoading } = useProduct(product.productId);
  const dispatch = useDispatch();

  if (isLoading)
    return (
      <div className="flex h-[50px] mt-2">
        <div className="w-[50px] h-[50x] bg-[#e6e6e6] rounded-md"> </div>
        <div className="flex-col ml-6 mt-4">
          <div className="h-2 w-[100px] bg-[#e6e6e6] rounded-full"></div>
          <div className="h-2 w-[200px] bg-[#e6e6e6] mt-2 rounded-full"></div>
        </div>
      </div>
    );

  return (
    <>
      {data && (
        <div
          key={data.productId}
          className="flex justify-between items-center mb-4"
        >
          <div className="flex items-center">
            <img
              className="h-[50px] w-[50px] rounded-lg border border-[#e6e6e6]"
              src={data.image}
              alt="bokdok"
            />
            <div className="ml-6">
              <p className="text-[14px] max-w-[200px] font-medium">
                {data.name}
              </p>
              <p className="text-[14px] font-medium">
                <span className="text-[#767676] font-normal">
                  {data.price}LKR x {product.quantity} ={' '}
                </span>
                {product.quantity * data.price}
                LKR
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                REMOVE_FROM_CART({
                  productId: product.productId,
                })
              )
            }
          >
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default CartTabItem;
