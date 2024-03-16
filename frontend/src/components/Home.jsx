import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);
  async function data() {
    const response = await axios.get("http://localhost:3000/list");
    const { data } = await response.data;
    setBooks(data);
  }

  useEffect(() => {
    data();
  }, []);
  return (
    <div className="">
      <div className="">Welcome to book shop</div>
      <div>
        {books.map((el, i) => {
          return (
            <>
              <div key={i}>
                <div>{el.author}</div>
                <div>{el.content}</div>
                <div>{el.image}</div>
                <div>{el.name}</div>

                <div>{el.createdAt}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
