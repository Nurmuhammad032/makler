import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingPost, UserSingle } from "../../components";
import { baseURL } from "../../requests/requests";

const Industriya = () => {
  const [data, setData] = useState();
  const [loading, setLaoding] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${baseURL}/store2/api/v1/store/${id}`)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err))
      .finally(() => setLaoding(false));
  }, [id]);

  return (
    <section className="content">
      {loading && <LoadingPost />}
      <UserSingle data={data} id={id} />
    </section>
  );
};

export default Industriya;
