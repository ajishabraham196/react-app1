import { useState, useEffect } from "react";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

const State = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const url = "https://api.github.com/users";

  const handleClick = (id) => {
    console.log(id);
    setCount(count + 1);
  };

  const FetchData = async () => {
    try {
      const respone = await fetch(url);
      const users = await respone.json();
      console.log(users);
      setUsers(users);
    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {books.map((book) => {
        return <h3 key={book.author}>{book.author}</h3>;
      })}

      {users.map((user) => {
        return (
          <>
            <div className="container">
              <div className="col-5">
                <h3>{user.login}</h3>
                <img src={user.avatar_url} width={100} height={100} />
              </div>
            </div>
          </>
        );
      })}

      <h1>Number of times : {count}  : </h1>
      <button
        className="btn"
        onClick={() => {
          handleClick(count);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default State;
