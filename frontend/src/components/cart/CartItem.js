import Counter from '../common/Counter';
import deleteIcon from '../../assets/icons/icon-delete.svg';

const CartItem = ({ item }) => {
  return (
    <>
      <div className="flex border-b border-[#e6e6e6] p-5 items-center justify-between">
        <img
          className="w-[60px] h-[60px] hidden sm:block"
          src={item.image}
          alt="product"
        />
        <p>{item.title}</p>
        <div className="min-w-[96px]">
          <Counter initialValue={item.quantity} />
        </div>
        <p>{item.price}LKR</p>
        <button>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
    </>
  );
};

export default CartItem;