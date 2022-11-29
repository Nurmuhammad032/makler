import { UserSingle } from "../../components";
import { masterData } from "./masterData";

const MasterPage = () => {
  return (
    <div>
      <UserSingle data={masterData[0]} />
    </div>
  );
};

export default MasterPage;
