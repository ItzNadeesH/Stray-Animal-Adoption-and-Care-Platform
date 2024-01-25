import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from '../common/Dropdown';
import Dropzone from '../common/Dropzone';
import SuccessMessage from '../common/SuccessMessage';
import { IoArrowBack } from 'react-icons/io5';

const AddProductForm = ({ onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErros] = useState(null);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [petType, setPetType] = useState('');
  const initialState = {
    productName: '',
    image: '',
    category: '',
    petType: '',
    price: '',
    manufacturer: '',
    description: '',
  };
  const [formData, setFormData] = useState(initialState);

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
    setIsLoading(true);
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

      setFormData(initialState);
      setImage(null);
      setCategory('Select an option');
      setPetType('Select an option');
      setIsLoading(false);
      setIsVisible(true);
      //onSelect('Products');
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(errors);
      setErros(errors);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-screen-full bg-[#f6f6f6] p-2">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <div className="flex">
            <IoArrowBack
              onClick={() => onSelect('Products')}
              size={24}
              className="cursor-pointer"
            />
            <p className="mb-2 ml-2">Add Product</p>
          </div>
          <form
            className="flex flex-wrap justify-between"
            onSubmit={handleSubmit}
          >
            <div className="p-5 border border-[#e6e6e6] rounded-md mb-4 xl:mb-0 w-full xl:w-[49%]">
              <p className="mb-4 text-[14px]">Add Images</p>
              <Dropzone imageProp={image} setImageProp={setImage} />
            </div>
            <div className="p-5 border border-[#e6e6e6] rounded-md w-full xl:w-[49%]">
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
                  selectedProp={category}
                  setSelectedProp={setCategory}
                />
              </div>
              <div className="mb-3">
                <p className="block text-[12px] mb-2">Pet Type</p>
                <Dropdown
                  items={petTypes}
                  width="full"
                  selectedProp={petType}
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
              <button
                disabled={isLoading}
                className="mt-3 h-9 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all"
              >
                Publish Product
              </button>
            </div>
          </form>
        </div>
        <div className="flex">
          {errors &&
            errors.map((error, index) => (
              <div key={index} className="text-red">
                {error.msg}
              </div>
            ))}
        </div>
      </div>
      <SuccessMessage
        navigate={() => onSelect('Products')}
        active={isVisible}
        setActive={setIsVisible}
      />
    </>
  );
};

export default AddProductForm;
