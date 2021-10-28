import React, { FC } from "react";
import "./Avatar.css";

export type AvatarProps = {
  src?: string;
  altText?: string;
  letter?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, altText, letter }) => {
  return (
    <div className="git-repo__avatar">
      {src && altText && <img src={src} alt={altText} />}
    </div>
  );
};

export default React.memo(Avatar);
