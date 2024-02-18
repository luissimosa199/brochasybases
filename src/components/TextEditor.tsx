"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const quillId = "custom-quill-container";

  return (
    <div className="mb-12">
      <ReactQuill
        className="h-96"
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "link",
          "image",
        ]}
        bounds={`#${quillId}`} // Bound the toolbar to the container with the specified ID
      />
    </div>
  );
};

export default TextEditor;
