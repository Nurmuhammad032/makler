import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserSingle } from "../../components";
import { baseURL } from "../../requests/requests";

const Industriya = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseURL}/store2/api/v1/store/${id}`)
      .then((data) => setData(data.data));
  }, []);


  return (
    <section className="content">
      <UserSingle data={data} />
    </section>
  );
};

export default Industriya;
