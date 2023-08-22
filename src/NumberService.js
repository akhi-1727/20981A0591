// NumberService.js
import axios from 'axios';

const NumberService = {
  getMergedNumbers: async (urls) => {
    try {
      const response = await axios.get('http://localhost:8008/numbers', {
        params: {
          url: urls,
        },
      });
      return response.data.numbers;
    } catch (error) {
      console.error('Error fetching merged numbers:', error);
      return [];
    }
  },
};

export default NumberService;
