import axios from 'axios';

const api_url = 'https://api.publicapis.org/categories';

const fetchCategories = async () => {
  try {
    const response = await axios.get(api_url);
    return response.data.categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchCategories;
