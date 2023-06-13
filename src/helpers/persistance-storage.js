export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Failed to set");
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Failed to get");
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing");
  }
};
