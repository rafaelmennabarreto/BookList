const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const getBookByName = async bookName => {
  try {
    const response = await fetch(URL + bookName);
    const data = await response.json();
    return data;
  } catch {
    return '';
  }
};

const getBookById = async bookId => {
  try {
    const response = await fetch(`${URL}id:${bookId}`);
    const data = await response.json();
    return data;
  } catch {
    return '';
  }
};

export default {
  getBookByName,
  getBookById,
};
