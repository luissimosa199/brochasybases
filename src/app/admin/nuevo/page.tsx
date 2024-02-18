"use client";
import InputList from "@/components/InputList";
import InputListItem from "@/components/InputListItem";
import LinkListItemWithTitle from "@/components/LinkListItemWithTitle";
import LinksInputList from "@/components/LinksInputList";
import TextEditor from "@/components/TextEditor";
import { PostLink } from "@/types";
import { handleNewFileChange, uploadImages } from "@/utils/formHelpers";
import { handlePostSubmit } from "@/utils/handlePostSubmit";
import { CldImage } from "next-cloudinary";
import React, { ChangeEvent, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = ({
  submitBtnDisabled,
}: {
  submitBtnDisabled: boolean;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 p-2 rounded-md text-white font-semibold my-2"
      type="submit"
    >
      {pending || submitBtnDisabled ? "Verificando..." : "Guardar"}
    </button>
  );
};

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string>("");
  const [image, setImage] = useState<string | null>();
  const [previews, setPreviews] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [links, setLinks] = useState<PostLink[]>([]);
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState<boolean>(false);

  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useFormState(handlePostSubmit, initialState);

  const handleUploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
    setSubmitBtnDisabled(true);
    const newPreviews = await handleNewFileChange(event);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);

    try {
      const uploadedUrls = await uploadImages(event);
      if (uploadedUrls && uploadedUrls.length > 0) {
        setImage(uploadedUrls[0]);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }

    setSubmitBtnDisabled(false);
    event.target.value = "";
  };

  const resetForm = () => {
    setValue("");
    setImage(null);
    setPreviews([]);
    setTags([]);
  };

  return (
    <main className="p-4">
      <h1 className="font-semibold text-xl mb-4">Nueva publicación</h1>
      <form
        ref={formRef}
        action={(e) => {
          formAction(e);
          if (state.success && formRef.current) {
            formRef.current?.reset();
            resetForm();
          }
        }}
      >
        <input
          type="hidden"
          name="tags"
          value={JSON.stringify(tags)}
          required
        />

        <input
          type="hidden"
          name="links"
          value={JSON.stringify(links)}
        />

        <input
          type="hidden"
          name="image"
          value={image || ""}
        />

        <input
          type="hidden"
          name="text"
          value={value}
        />

        <input
          type="text"
          id="title"
          name="title"
          className="p-2 border rounded-md mb-2 w-full"
          placeholder="Título"
          required
        />

        <input
          type="text"
          id="slug"
          name="slug"
          className="p-2 border rounded-md mb-2 w-full"
          placeholder="Slug"
          required
        />

        <textarea
          name="description"
          id="description"
          maxLength={156}
          placeholder="Descripción (hasta 156 caracteres)"
          className="p-2 border rounded-md mb-2 w-full"
          cols={30}
          rows={3}
          required
        ></textarea>

        <InputList
          inputList={tags}
          setInputList={setTags}
          placeholder="Categorías"
        />
        <ul className="flex gap-2 flex-wrap mb-2">
          {tags.length > 0 &&
            tags.map((e, idx) => {
              return (
                <li
                  className="w-fit"
                  key={`tag_${idx}_${e}`}
                >
                  <InputListItem
                    tag={e}
                    setInputList={setTags}
                  />
                </li>
              );
            })}
        </ul>

        <LinksInputList
          inputList={links}
          setInputList={setLinks}
          placeholder="Links"
        />
        <ul className="flex gap-2 flex-col mb-2">
          {links.length > 0 &&
            links.map((e, idx) => {
              return (
                <li
                  className="w-full"
                  key={`link_${idx}_${e.url}`}
                >
                  <LinkListItemWithTitle
                    link={e}
                    setInputList={setLinks}
                  />
                </li>
              );
            })}
        </ul>

        <label
          htmlFor="file"
          className="flex gap-2 items-center w-fit h-8 cursor-pointer rounded-md p-2 bg-gray-200 hover:bg-slate-400 transition-all mb-2"
        >
          Subir imagen
        </label>

        <input
          name="file"
          accept="*"
          className=""
          type="file"
          id="file"
          multiple
          onChange={handleUploadImages}
          hidden
        />

        {previews.map((preview, index) => {
          if (previews.includes("video")) {
            return (
              <video
                key={index}
                src={preview}
                className="w-20 h-20 object-cover"
                controls
              />
            );
          }
          return (
            <CldImage
              key={index}
              src={preview}
              alt="preview"
              width={80}
              height={80}
              className="w-20 h-20 object-cover"
            />
          );
        })}

        <div>
          <TextEditor
            value={value}
            setValue={setValue}
          />
        </div>
        <SubmitButton submitBtnDisabled={submitBtnDisabled} />
      </form>
    </main>
  );
};

export default Page;
