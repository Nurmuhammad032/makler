import React from "react";
import { FilterWorker } from "../../components";

const Workers = () => {
  return (
    <section className="content">
      <div className="container">
        <div>
          <FilterWorker />
          <div>fdsaljlfslfjlsk</div>
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