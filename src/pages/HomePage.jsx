import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log("Rendered");
    setSearchParams("name=jhon");
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl text-white">This is HomePage</h1>
      <button
        className="px-2 bg-blue-700 rounded text-sm text-white py-1"
        onClick={() => navigate("/services")}
      >
        Navigate to Service Page
      </button>
      <h1>{searchParams.get("name")}</h1>
    </div>
  );
};

export default HomePage;
