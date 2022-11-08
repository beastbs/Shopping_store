const ShopService = () => {
  const _baseUrl = "https://api.escuelajs.co/api/v1/products";
  const _baseOffset = 5;

  const getAllGoods = async (offset: number = _baseOffset) => {
    return fetch(`${_baseUrl}?offset=${offset}&limit=12`)
      .then((request) => request.json())
      .catch((err) =>
        console.error(err.message, "while tried to getting all goods...")
      );
  };

  const getSingleGood = async (id: number = 5) => {
    return fetch(`${_baseUrl}/${id}`)
      .then((request) => request.json())
      .catch((err) =>
        console.error(err.message, "while tried to getting single product... ")
      );
  };

  return {
    getAllGoods,
    getSingleGood,
  };
};

export default ShopService;
