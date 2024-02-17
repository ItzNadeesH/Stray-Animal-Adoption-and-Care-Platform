import { LuPlus, LuMinus } from 'react-icons/lu';
import deleteIcon from '../../assets/icons/icon-delete.svg';
import { useProduct } from '../../hooks/useProduct';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../reducers/cartSlice';
import { useState } from 'react';

const CartItem = ({ item, onDelete }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { data } = useProduct(item.productId);
  const dispatch = useDispatch();

  const handleDelete = () => {
    onDelete(item.productId);
    dispatch(
      REMOVE_FROM_CART({
        productId: item.productId,
      })
    );
  };

  return (
    <>
      {data && (
        <div className="flex border-b border-[#e6e6e6] p-5 items-center justify-between">
          <img
            className="w-[60px] h-[60px] hidden sm:block"
            src={data.image}
            alt="product"
          />
          <p className="w-[150px]">{data.name}</p>
          <div className="w-[96px]">
            <div className="max-w-xs w-full">
              <div className="relative flex items-center ">
                <button
                  disabled={quantity <= 1}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="bg-[#f1f5f9] rounded-s-lg p-3 h-12"
                  onClick={() => {
                    setQuantity(quantity - 1);
                    dispatch(
                      ADD_TO_CART({
                        productId: item.productId,
                        value: quantity - 1,
                        price: data.price,
                      })
                    );
                  }}
                >
                  <LuMinus />
                </button>
                <p className="bg-[#f1f5f9] h-12 text-center text-sm block w-full py-2.5 outline-0 select-none flex items-center justify-center">
                  {quantity}
                </p>
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="bg-[#f1f5f9] rounded-e-lg p-3 h-12 outline-none"
                  onClick={() => {
                    setQuantity(quantity + 1);
                    dispatch(
                      ADD_TO_CART({
                        productId: item.productId,
                        value: quantity + 1,
                        price: data.price,
                      })
                    );
                  }}
                >
                  <LuPlus />
                </button>
              </div>
            </div>
          </div>
          <p className="w-[96px]">{data.price}LKR</p>
          <button onClick={handleDelete}>
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default CartItem;
