import React from 'react';
import { useClipboard } from './hooks/useClipboard';
import { getEmojiSrc } from './util/getEmojiSrc';

const NOOP = () => {
  // noop
};

export const Results = (props) => {
  const title = props.title;
  const emojis = props.emojis;
  const onCopy = props.onCopy ?? NOOP;

  useClipboard('.copy-to-clipboard');

  return (
    <>
      <h2>{title}</h2>

      {emojis.length === 0 ? (
        <h3 class="text-center">No results!</h3>
      ) : (
        <ul className="list-group" style={{ cursor: 'pointer' }}>
          {emojis.map((emoji) => (
            <li
              key={emoji.title}
              className="copy-to-clipboard list-group-item list-group-item-action"
              data-clipboard-text={emoji.symbol}
              onClick={() => onCopy(emoji)}
            >
              <img src={getEmojiSrc(emoji.symbol)} width={32} height={32} />
              &nbsp;
              {emoji.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
