import { uploadImage } from "./formHelpers";

export async function replaceImages(htmlString: string) {
  const imgRegex = /<img.*?src=["'](.*?)["'].*?\/?>/g;
  const matches = htmlString.match(imgRegex) || [];

  const replacements = await Promise.all(
    matches.map(async (match) => {
      const srcMatch = match.match(/src=["'](.*?)["']/);
      if (srcMatch) {
        const originalSrc = srcMatch[1];
        const cloudinaryUrl = await uploadImage(originalSrc);
        return { originalSrc, cloudinaryUrl };
      }
      return null;
    })
  );

  let updatedHtmlString = htmlString;
  replacements.forEach((replacement) => {
    if (replacement && replacement.cloudinaryUrl) {
      updatedHtmlString = updatedHtmlString.replace(
        replacement.originalSrc,
        replacement.cloudinaryUrl
      );
    }
  });
  return updatedHtmlString;
}
