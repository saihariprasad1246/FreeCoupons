import React from "react";
import { Link } from "react-router-dom";

const CouponCard = ({ image, title, description, link, id }) => {
  description =
    description.length > 50 ? description.slice(0, 50) + "..." : description;
    //console.log(image,name,description)

  return (
    <Link to={`/description/${id}`} className="block group">
      <div className="flex flex-col  items-center gap-2 h-full p-2">
        <div className="w-full h-[50%] ">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-mono pl-1">{title.slice(10,title.length-1)}</h2>
        </div>
        
        <div className="text-white bg-blue-700 hover:rounded-full  px-3 py-1 transition-all duration-300 hover:scale-110">
        <Link to={`/description/${id}`}  className="h-full w-full">View Details</Link>
        </div>
      </div>
    </Link>
  );
};

export default CouponCard;
