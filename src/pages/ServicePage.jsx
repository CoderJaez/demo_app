import { useParams, useSearchParams } from "react-router-dom";

const ServicePage = () => {
  const { id } = useParams();
  let [searchParams] = useSearchParams();
  return (
    <div className="p-8">
      <h1 className="text-2xl text-white">This is Service Page</h1>
      <p className="text-lg">
        Param id: <span className="itallic text-sm text-red-600">{id}</span>
      </p>

      <p className="text-lg">
        Search Params:{" "}
        <span className="itallic text-sm text-red-600">
          {`${searchParams.get("name")} ${searchParams.get("lastname")}`}
        </span>
      </p>
    </div>
  );
};

export default ServicePage;
