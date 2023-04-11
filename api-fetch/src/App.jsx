import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";

function App() {
  let [data, setdata] = useState([]);
  let [count, setcount] = useState(4)

  useEffect(() => {
    get();
  }, [count]);

  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=${count}`);
    let res = await req.json();
    setdata(res.products);
  };
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((v, i) => {
        return (
          <Col xs={12} md={4} lg={3} key={i} className="main">
            <div className="m-border">
              <div className="i-box">
                <img src={v.thumbnail} alt={`img${i}`} />
              </div>
              <h2>{v.title}</h2>
              <p>{v.description}</p>
              <h6>rating : <span>{v.rating}</span></h6>
              <h6>available stock : {v.stock}</h6>
              <h3>Price : <span>${v.price}</span><span></span></h3>
            </div>
          </Col>
        );
      })}
      <div className="btn">
        <button onClick={() => setcount(count == 4 ? count = 4 : count - 4)}>Prev</button>
        <button onClick={() => setcount(4 + count)}>Next</button>
      </div>
    </div>
  );
}

export default App;