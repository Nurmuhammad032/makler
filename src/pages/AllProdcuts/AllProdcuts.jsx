import { Filter, Houses } from "../../components";
import useForm from "../../hooks/useForm";

const AllProducts = () => {
  const { form, changeHandler } = useForm({
    typeRoom: "",
    room: "",
    building: "",
    search: "",
  });
  return (
    <div className="content">
      <div className="container">
        <div
          style={{
            padding: "2rem 0",
          }}
        >
          <Filter value={form} change={changeHandler} />
          <Houses value={form} />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
