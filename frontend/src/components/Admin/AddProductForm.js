import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from '../common/Dropdown';
import Dropzone from '../common/Dropzone';

const AddProductForm = () => {
  const [image, setImage] = useState();
  const [category, setCategory] = useState('');
  const [petType, setPetType] = useState('');
  const [formData, setFormData] = useState({
    productName: '',
    image: '',
    category: '',
    petType: '',
    price: '',
    manufacturer: '',
    description: '',
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: image,
      category: category,
      petType: petType,
    }));
  }, [image, category, petType]);

  const categories = ['Food', 'Suppliment', 'Accessories'];
  const petTypes = ['Any', 'Cat', 'Dog'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { productName, price, manufacturer, description } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      productName,
      image,
      category,
      petType,
      price,
      manufacturer,
      description,
    });

    try {
      await axios.post('/api/products', body, config);

      console.log('Success');
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(errors);
    }
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
              <Dropzone setImageProp={setImage} />
            </div>
            <div className="p-5 border border-[#e6e6e6] rounded-md w-full md:w-[49%]">
              <div className="mb-3">
                <label className="block text-[12px] mb-2" htmlFor="productName">
                  Product Name
                </label>
                <input
                  className="text-[14px] px-4 py-2.5 h-[40px] border border-[#000000] rounded-md w-full placeholder:text-[#00000080] outline-0"
                  type="text"
                  name="productName"
                  id="productName"
                  onChange={handleChange}
                  value={formData.productName}
                />
              </div>
              <div className="mb-3">
                <p className="block text-[12px] mb-2">Category</p>
                <Dropdown
                  items={categories}
                  width="full"
                  setSelectedProp={setCategory}
                />
              </div>
              <div className="mb-3">
                <p className="block text-[12px] mb-2">Pet Type</p>
                <Dropdown
                  items={petTypes}
                  width="full"
                  setSelectedProp={setPetType}
                />
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
                  min={0}
                  onChange={handleChange}
                  value={formData.price}
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
                  onChange={handleChange}
                  value={formData.manufacturer}
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
                  onChange={handleChange}
                  value={formData.description}
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