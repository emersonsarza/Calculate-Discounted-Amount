const getDiscountedAmount = (books: number[]): string => {
  const discount = [0.0, 0.05, 0.1, 0.2, 0.25];
  const totalAmount = books.reduce((total, count) => total + count * 8, 0);
  let booksList = [...books];
  let min;
  const setCount = [0, 0, 0, 0, 0];

  // remove zero
  booksList = booksList.filter((bookCount) => bookCount !== 0);

  do {
    // identify non-zero min
    let min = Math.min(...booksList);

    // deduct min
    booksList = booksList.map((bookCount) => bookCount - min);

    // update setCount
    setCount[booksList.length - 1] += min;

    // remove zero
    booksList = booksList.filter((bookCount) => bookCount !== 0);
  } while (booksList.length > 0);

  //             1  2  3  4  5
  // setCount = [0, 0, 1, 0, 1]
  // every set of 3 and 5 will get more discount
  // get min setCount between 3 and 5
  min = setCount[2] > setCount[4] ? setCount[4] : setCount[2];
  setCount[2] -= min;
  setCount[4] -= min;
  setCount[3] += min * 2;

  const totalDiscount = setCount.reduce(
    (total, count, index) => total + count * (index + 1) * 8 * discount[index],
    0
  );

  return (totalAmount - totalDiscount).toFixed(2);
};

module.exports = getDiscountedAmount;
