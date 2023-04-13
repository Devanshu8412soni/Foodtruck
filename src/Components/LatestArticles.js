import React, { useState } from "react";
import Menu from "./Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const LatestArticles = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(Menu.length / itemsPerPage);

  const handleNextClick = () => {
    if(currentPage<maxPage)
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    if(currentPage>1)
    setCurrentPage(currentPage - 1);
  };

  
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return (
    <>
      <div className="articles">
        <h1>Latest Articles</h1>
        <div className="cards">
          {Menu.slice(start, end).map((items) => {
            return (
              <div className="card" key={items.id}>
                <img src={items.imgsrc} alt="food" />
                <h3>{items.title}</h3>
                <p>{items.content}</p>
                <button>Read More</button>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <ArrowBackIosIcon className={currentPage === 1 ? "disable"  : "prev"} onClick={ handlePrevClick} />
          <p style={{ color: "#424961" }}>{currentPage}/{maxPage}</p>
          <ArrowForwardIosIcon className={currentPage === maxPage ? "disable_next"  : "next"} onClick={handleNextClick} />
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
