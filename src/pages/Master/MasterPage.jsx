import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserSingle } from "../../components";
import { baseURL } from "../../requests/requests";

const MasterPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseURL}/master/api/v1/maklers/${id}`)
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="content">
      <UserSingle data={data} />
    </div>
  );
};

export default MasterPage;
