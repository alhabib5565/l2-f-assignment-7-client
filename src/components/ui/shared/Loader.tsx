import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-200 bg-opacity-50">
      <Circles
        height="80"
        width="80"
        color="#E05A45"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
