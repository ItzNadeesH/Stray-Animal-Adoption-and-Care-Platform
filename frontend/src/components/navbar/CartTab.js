import bokdok from '../../assets/bok-dok.jpg';
import deleteIcon from '../../assets/icons/icon-delete.svg';
import { Link } from 'react-router-dom';

const CartTab = () => {
  const items = [
    {
      id: 1,
      image: bokdok,
      title: 'Bokdok',
      quantity: 3,
      price: 1200,
    },
    {
      id: 2,
      image: bokdok,
      title: 'Bokdok',
      quantity: 3,
      price: 1200,
    },
  ];
  return (
    <>
      <div className="w-[360px] shadow-2xl mr-2 rounded-lg bg-[#ffffff] animate-fadeOut">
        <p className="font-medium p-4 px-6 border-b border-[#e6e6e6]">Cart</p>
        <div className="p-6">
          {items &&
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <img
                    className="h-[50px] w-[50px] rounded-lg border border-[#e6e6e6]"
                    src={item.image}
                    alt="bokdok"
                  />
                  <div className="ml-6">
                    <p className="text-[14px] font-medium">{item.title}</p>
                    <p className="text-[14px] font-medium">
                      <span className="text-[#767676] font-normal">
                        {item.price}LKR x {item.quantity} ={' '}
                      </span>
                      {item.quantity * item.price}
                      LKR
                    </p>
                  </div>
                </div>
                <button>
                  <img src={deleteIcon} alt="delete-icon" />
                </button>
              </div>
            ))}
          {items.length !== 0 ? (
            <div>
              <Link to="/cart">
                <button className="mt-2 w-full py-2 text-[14px] text-cyan-blue bg-[#ffffff] border border-cyan-blue hover:text-[#000000] rounded-md">
                  View Cart
                </button>
              </Link>
              <Link to="/checkout">
                <button className="mt-2 w-full py-2 text-[14px] text-[#ffffff] bg-cyan-blue hover:bg-[#000000] transition rounded-md">
                  Checkout
                </button>
              </Link>
            </div>
          ) : (
            <p className="text-[14px] text-[#767676] font-medium text-center p-10">
              Your cart is empty!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartTab;
