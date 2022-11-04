const ShopService = () => {
  const _baseUrl = "https://api.escuelajs.co/api/v1/products";
  const _baseOffset = 5;

  const getAllGoods = async (offset: number = _baseOffset) => {
    const request = await fetch(`${_baseUrl}?offset=${offset}&limit=10`);
    return await request.json();
  };

  const getSingleGood = async (id: number = 5) => {
    const request = await fetch(`${_baseUrl}/${id}`);
    return await request.json();
  };

  return {
    getAllGoods,
    getSingleGood,
  };
};

export default ShopService;
