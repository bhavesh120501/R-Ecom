import React, { useState, useEffect } from 'react';

export const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  // console.log(imgs);

  useEffect(() => {
    if (imgs.length > 0) {
      setMainImage(imgs[0]);
    }
  }, [imgs]);

  return (
    <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center gap-2">
      <div className="flex flex-row md:flex-col gap-6 md:gap-2 items-center justify-center">
        {imgs.map((curVal,index) => {
          return (
            <figure key={index} className="w-24 h-24 md:w-44 md:h-24 hover:opacity-80">
              <img
                src={curVal.url}
                alt={curVal.filename}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  setMainImage(curVal);
                }}
              />
            </figure>
          );
        })}
      </div>
      <div className="flex items-center justify-center w-full">
        {mainImage && (
          <img
            src={mainImage.url}
            alt={mainImage.filename}
            className="w-full h-56 md:h-56 object-cover"
          />
        )}
      </div>
    </div>
  );
};
