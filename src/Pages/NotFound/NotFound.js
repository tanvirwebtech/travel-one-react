import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404_not_found.svg";
const NotFound = () => {
  return (
    <div>
      <div className="not_found">
        <img
          className="w-2/5 mx-auto my-8 "
          src={notFound}
          alt="Page Not Found"
          title="Page Not Found"
        />
        <Link to="/">
          <button className="px-4 py-2 transition duration-300 font-medium text-xl text-navyblue bg-greenblue hover:bg-greenblue-dark border-0 rounded-md my-4">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
