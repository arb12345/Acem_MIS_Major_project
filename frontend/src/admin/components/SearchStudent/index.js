import React, { useState } from "react";
import "./index.css";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Index = () => {
  const [name, setName] = useState("");
  return (
    <div className="searchBox">
      <textarea
        type="text"
        placeholder="Search For Student.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/admin/SearchedStudent/${name}`}>
        <BiSearchAlt className="searchIcon" />
      </Link>
    </div>
  );
};

export default Index;
