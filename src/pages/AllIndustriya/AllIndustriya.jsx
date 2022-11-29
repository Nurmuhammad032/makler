import { useContext } from "react";
import { ProductSingle } from "../../components";
import ContextApp from "../../context/context";

const AllIndustriya = () => {
  const { stores } = useContext(ContextApp);
  return (
    <section className="content">
      <div className="container">
        <div
          style={{
            padding: "2rem 0",
          }}
        >
          <div className="app__cards--wrapper">
            {stores?.map((data) => (
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
        </div>
      </div>
    </section>
  );
};

export default AllIndustriya;
