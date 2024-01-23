import Dropdown from '../common/Dropdown';
import Dropzone from '../common/Dropzone';

const AddProductForm = () => {
  const categories = ['Food', 'Suppliment', 'Accessories'];
  const petType = ['Any', 'Cat', 'Dog'];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="max-w-screen-lg bg-[#f6f6f6] p-2">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <p className="mb-2">Add Product</p>
          <form
            className="flex flex-wrap justify-between"
            onSubmit={handleSubmit}
          >
            <div className="p-5 border border-[#e6e6e6] rounded-md mb-4 md:mb-0 w-full md:w-[49%]">
              <p className="mb-4 text-[14px]">Add Images</p>
              <Dropzone />
            </div>
            <div className="p-5 border border-[#e6e6e6] rounded-md w-full md:w-[49%]">
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="productname">
                  Product Name
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="productname"
                  id="productname"
                />
              </div>
              <div className="mb-3">
                <p className="block text-[12px] mb-2">Category</p>
                <Dropdown items={categories} width="full" />
              </div>
              <div className="mb-3">
                <p className="block text-[12px] mb-2">Pet Type</p>
                <Dropdown items={petType} width="full" />
              </div>
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="price">
                  Price (LKR)
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="number"
                  name="price"
                  id="price"
                />
              </div>
              <div className="mb-3">
                <label
                  className="block text-[12px] mb-2"
                  htmlFor="manufacturer"
                >
                  Manufacturer
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="manufacturer"
                  id="manufacturer"
                />
              </div>
              <div>
                <label
                  className="block text-[12px] mb-2 mt-4"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="h-[170px] text-[14px] px-4 py-2.5 border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <button className="mt-3 h-9 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all">
                Publish Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
