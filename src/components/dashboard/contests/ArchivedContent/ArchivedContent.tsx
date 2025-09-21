"use client";
import React, { useState } from "react";
import Pagination from "../../../dump/Pagination";
import ContestCard from "./ContestCard";

const cardData = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Contest ${i + 1}`,
  subTitle: `| 01.06.23`,
  description:
    "Lorem Ipsum dolores omit est Lorem Ipsum dolores omit est Lorem Ipsum dolores omit est Lorem Ipsum dolores omit est Lorem Ipsum dolores",
}));

const ArchivedContent = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const currentItems = cardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main>
      <div className="flex flex-col gap-5 ">
        {currentItems.map((card) => (
          <ContestCard key={card.id} card={card} />
        ))}
      </div>

      <Pagination
        total={totalPages}
        current={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

export default ArchivedContent;
