import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { ProductSingle } from "../../components";
import ContextApp from "../../context/context";

const AllIndustriya = () => {
  const { stores } = useContext(ContextApp);
  const [data, setData] = useState();
  const [limit, setLimit] = useState(9);
  useEffect(() => {
    axios
      .get(`https://fathulla.tk/store2/api/v1/store/?limit=${limit}`)
      .then((data) => setData(data.data.results))
      .catch((err) => console.log(err));
  }, [limit]);
  return (
    <section className="content">
      <div className="container">
        <div
          style={{
            padding: "2rem 0",
          }}
        >
          <div className="app__cards--wrapper">
            {data &&
              data?.map((data) => (
                <div
                  style={{
                    marginRight: "0.5rem",
                  }}
                  key={data.id}
                >
                  <ProductSingle data={data} />
                </div>
              ))}
          </div>
          <button
            onClick={() => setLimit((prev) => (prev += 9))}
            className="btn btn-big btn-white"
            id="show-more"
            style={{
              margin: "4rem auto",
            }}
          >
            Показать ещё
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllIndustriya;
