// import Spinner from "react-spinner-material";
import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <RotateLoader color="#ff6a48" />
    </div>
  );
};

export default Loader;
