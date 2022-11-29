import React, { useContext } from "react";
import { FilterWorker, UserCard } from "../../components";
import ContextApp from "../../context/context";

const Workers = () => {
  const { masters } = useContext(ContextApp);

  return (
    <section className="content">
      <div className="container">
        <div>
          <FilterWorker />
          <div className="app__cards--wrapper">
            {masters?.map((data, i) => (
              <div
                key={i}
                style={{
                  marginRight: "0.5rem",
                }}
              >
                <UserCard data={data} />
              </div>
            ))}
          </div>
        </div>
        <button
          className="btn btn-big btn-white"
          id="show-more"
          style={{
            margin: "4rem auto",
          }}
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
};

export default Workers;
