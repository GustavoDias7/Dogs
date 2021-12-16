import React from "react";
import style from "./Image.module.css";

const Image = ({ src, alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.wrapper}>
      {skeleton && <div className={style.skeleton} />}
      <img
        onLoad={handleLoad}
        className={style.img}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Image;
