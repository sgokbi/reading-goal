const addBookToDB = (id) => {
  let readBookList = getBookFromDB();

  readBookList[id] = 1;

  localStorage.setItem("read-book-list", JSON.stringify(readBookList));
};

const getBookFromDB = () => {
  let readBookList = {};

  const storedBookInDB = localStorage.getItem("read-book-list");
  if (storedBookInDB) {
    readBookList = JSON.parse(storedBookInDB);
  }

  return readBookList;
};

export { addBookToDB, getBookFromDB };
