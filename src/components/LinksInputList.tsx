"use client";
import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import ChevronRightSvg from "./icons/ChevronRightSvg";
import { PostLink } from "@/types";

const tailwindNamedColors = [
  "black",
  "white",
  "rose",
  "pink",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "red",
  "warmGray",
  "trueGray",
  "gray",
  "coolGray",
  "blueGray",
] as const;

type TailwindColor = (typeof tailwindNamedColors)[number];

type InputListProps = {
  placeholder?: string;
  primaryColor?: TailwindColor;
  inputList: PostLink[];
  setInputList: Dispatch<SetStateAction<PostLink[]>>;
};

const LinksInputList: FunctionComponent<InputListProps> = ({
  inputList,
  setInputList,
  placeholder,
  primaryColor = "blue",
}) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addInput();
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const addInput = (valueToAdd?: string) => {
    const inputValue = (valueToAdd || inputText).trim().toLocaleLowerCase();

    if (inputList.some((link) => link.url === inputValue)) {
      setInputText("");
      return;
    }

    if (inputValue !== "") {
      const newLink: PostLink = {
        url: inputValue,
        title: "", // Set the title to an empty string
      };

      setInputList((prevInputs) => [...prevInputs, newLink]);
      setInputText("");
    }
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="relative">
        <div className="relative z-10">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="border rounded px-3 py-2 w-full mb-2"
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="off"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              addInput();
              if (inputRef.current) inputRef.current.focus();
            }}
            className={`absolute flex justify-center items-center right-2 top-2 text-lg font-bold rounded-full shadow w-6 h-6 leading-4 text-${primaryColor}-500 border border-${primaryColor}-500 bg-white hover:bg-${primaryColor}-200 hover:text-${primaryColor}-700`}
          >
            <ChevronRightSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksInputList;
