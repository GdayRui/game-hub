const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf("media/");
  return (
    url.slice(0, index) +
    target +
    "crop/600/400/" +
    url.slice(index + target.length)
  );
};

export default getCroppedImageUrl;
