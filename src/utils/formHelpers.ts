import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { convertToJpeg } from "./convertToJpeg";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const uploadImage = async (
  base64Data: string
): Promise<string | null> => {
  const blob = await fetch(base64Data).then((res) => res.blob());
  const file = new File([blob], "image.jpg", { type: "image/jpeg" });
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.secure_url;
    } else {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export const uploadImages = async (event: ChangeEvent<HTMLInputElement>) => {
  let urls = [];

  if (event.target.files) {
    const files = Array.from(event.target.files);

    urls = await Promise.all(
      files.map(async (e) => {
        let file = e;
        const pngRgx = /\/png$/;
        const isPng = pngRgx.test(file.type);
        if (isPng) {
          const convertedFile = await convertToJpeg(file);
          file = convertedFile as File;
        }

        // Upload to Cloudinary
        const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        const response = await fetch(url, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          return jsonResponse.secure_url;
        } else {
          throw new Error("Upload failed");
        }
      })
    );

    return urls;
  }
};

export const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  return new Promise<string[]>((resolve, reject) => {
    const files = event.target.files;
    const newPreviews: string[] = [];

    if (files && files.length > 0) {
      let processedFiles = 0;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const dataURL = reader.result as string;
          newPreviews.push(dataURL);
          processedFiles++;

          if (processedFiles === files.length) {
            resolve(newPreviews);
          }
        };

        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };

        reader.readAsDataURL(files[i]);
      }
    } else {
      resolve([]);
    }
  });
};

export const handleNewFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  return new Promise<string[]>((resolve, reject) => {
    const files = event.target.files;
    const newPreviews: string[] = [];

    if (files && files.length > 0) {
      let processedFiles = 0;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const dataURL = reader.result as string;
          newPreviews.push(dataURL);
          processedFiles++;

          if (processedFiles === files.length) {
            resolve(newPreviews);
          }
        };

        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };

        reader.readAsDataURL(files[i]);
      }
    } else {
      resolve([]);
    }
  });
};

export const handleFileAdding = (
  event: ChangeEvent<HTMLInputElement>,
  setImages: Dispatch<SetStateAction<string[]>>
) => {
  return new Promise<void>((resolve, reject) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      let newPreviews: string[] = [];

      let processedFiles = 0;

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const dataURL = reader.result as string;
          newPreviews.push(dataURL);
          processedFiles++;

          if (processedFiles === files.length) {
            // Add the new previews to the existing images
            setImages((prevImages) => [...prevImages, ...newPreviews]);
            resolve();
          }
        };

        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };

        reader.readAsDataURL(files[i]);
      }
    } else {
      setImages([]);
      resolve();
    }
  });
};

export const handleDeleteImage = (
  event: React.MouseEvent<HTMLButtonElement>,
  currentIdx: number,
  setImages: Dispatch<SetStateAction<string[]>>,
  setPreviews: Dispatch<SetStateAction<string[]>>
) => {
  event.preventDefault();
  setImages((prevImages) => prevImages.filter((e, idx) => idx !== currentIdx));
  setPreviews((prevImages) =>
    prevImages.filter((e, idx) => idx !== currentIdx)
  );
};
