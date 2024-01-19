import bokdok from '../../assets/bok-dok.jpg';
import Counter from '../common/Counter';
import deleteIcon from '../../assets/icons/icon-delete.svg';

const CartItem = () => {
  const item = {
    image: bokdok,
    title: 'Bokdok',
    price: 1200,
    quantity: 2,
  };
  return (
    <>
      <div className="max-w-[720px] flex border-b border-[#e6e6e6] p-5 items-center justify-between">
        <img
          className="w-[60px] h-[60px]"
          src={item.image}
          alt="product-image"
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
