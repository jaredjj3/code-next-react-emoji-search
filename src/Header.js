import React from "react";
import { getEmojiSrc } from "./util/getEmojiSrc";

const SMILE_CAT_SRC = getEmojiSrc("😸");
const POUTING_CAT_SRC = getEmojiSrc("😾");

export const Header = () => {
  return (
    <header className="text-center">
      <h1>
        <img src={SMILE_CAT_SRC} width="32" height="32" />
        Emoji Search
        <img src={POUTING_CAT_SRC} width="32" height="32" />
      </h1>
    </header>
  );
};
