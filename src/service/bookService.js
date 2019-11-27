const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const getBookByName = async bookName => {
  const response = await fetch(URL + bookName);
  const data = await response.json();
  return JSON.parse(data);
};

export default {
  getBookByName,
};
