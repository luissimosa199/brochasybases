import { PostLink } from "@/types";
import React from "react";

const LinkListItemWithTitle = ({
  link,
  setInputList,
}: {
  link: PostLink;
  setInputList: React.Dispatch<React.SetStateAction<PostLink[]>>;
}) => {
  const handleTitleChange = (url: string, newTitle: string) => {
    setInputList((prevInputList) => {
      const updatedLinks = prevInputList.map((link) =>
        link.url === url ? { ...link, title: newTitle } : link
      );
      return updatedLinks;
    });
  };

  return (
    <div className="flex items-center bg-blue-500 text-white rounded-md p-2 text-sm font-sans">
      <div className="flex flex-col gap-2 w-full">
        <span className="font-semibold">{link.url}</span>
        <input
          type="text"
          placeholder="Título"
          className="text-sm p-1 rounded-sm text-black"
          value={link.title}
          onChange={(e) => handleTitleChange(link.url, e.target.value)}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setInputList((prev) => prev.filter((e) => e !== link));
        }}
        className="ml-2 self-start focus:outline-none"
      >
        <span className="sr-only">Remove tag</span>
        <div className="bg-white rounded-full p-0.5">
          <svg
            className="h-3 w-3 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LinkListItemWithTitle;
