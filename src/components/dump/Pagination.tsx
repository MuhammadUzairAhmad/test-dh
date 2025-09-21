"use client";
import React from "react";
import clsx from "clsx";
import { poppins } from "@/lib/font";
import { PaginationProps } from "@/types";

const Pagination: React.FC<PaginationProps> = ({
  total,
  current,
  onPageChange,
}) => {
  const getPages = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, 4, "ellipsis", total);
      } else if (current >= total - 2) {
        pages.push(1, "ellipsis", total - 3, total - 2, total - 1, total);
      } else {
        pages.push(
          1,
          "ellipsis",
          current - 1,
          current,
          current + 1,
          "ellipsis",
          total
        );
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <div className="ml-3 md:ml-9 flex gap-2 mt-3 md:mt-6 flex-wrap items-center">
      {total > 6 && (
        <button
          onClick={() => current > 1 && onPageChange(current - 1)}
          className={clsx(
            poppins.className,
            "px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 hover:bg-[#010B28] hover:text-white"
          )}
          disabled={current === 1}
        >
          Prev
        </button>
      )}

      {pages.map((page, idx) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${idx}`} className="px-2 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={`page-${page}-${idx}`}
            onClick={() => onPageChange(Number(page))}
            className={clsx(
              poppins.className,
              "rounded-sm h-[27px] w-[27px] text-xl font-normal",
              Number(page) === current
                ? "bg-[#010B28] text-white font-semibold"
                : "text-[#010B28]"
            )}
          >
            {page}
          </button>
        )
      )}

      {total > 6 && (
        <button
          onClick={() => current < total && onPageChange(current + 1)}
          className={clsx(
            poppins.className,
            "px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 disabled:opacity-50 hover:bg-[#010B28] hover:text-white"
          )}
          disabled={current === total}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
