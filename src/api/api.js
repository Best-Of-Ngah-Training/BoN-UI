import axios from "axios";

export const fetchData = async (url, params = {}, headers = {}) => {
  try {
    const response = await axios.get(url, {
      params: params || {},
      headers: headers || {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (url, data = {}, headers = {}) => {
  try {
    const response = await axios.post(url, data || {}, {
      headers: headers || {},
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateData = async (url, data = {}, headers = {}) => {
  try {
    const response = await axios.put(url, data || {}, {
      headers: headers || {},
    });
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
