import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const z = useRef(0);

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Ashima", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  /**
   * UseRef is not like => z=0;
   *
   * It is like Object with cureent like => z={current: 0}
   */

  return (
    <div className="w-96 refhook">
      <div className="mb-2">
        <button
          onClick={() => {
            x = x + 1;
            console.log("Let x=", x);
          }}
          className="search-btn"
        >
          Update value X{" "}
        </button>
        <span> Let x = {x}</span>
      </div>
      <div className="mb-2">
        <button
          onClick={() => {
            setY(y + 1);
            console.log("Rederring.....state variable=", y);
          }}
          className="search-btn"
        >
          Update value Y{" "}
        </button>
        <span> Const value of state variable y = {y}</span>
      </div>
      <div className="mb-2">
        <button
          onClick={() => {
            z.current = z.current + 1;
            console.log("useRef variable=", z.current);
          }}
          className="search-btn"
        >
          Update value z{" "}
        </button>
        <span> useRef variable z = {z.current}</span>
      </div>
      <button
        className="btn-red"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        {" "}
        Stop Interval{" "}
      </button>
    </div>
  );
};

export default UseRefHook;
