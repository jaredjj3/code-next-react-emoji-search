import React from 'react';
import { getEmojiSrc } from './util/getEmojiSrc';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';

const GRINNING_EMOJI = ALL_EMOJIS[2];
const JOY_EMOJI = ALL_EMOJIS[5];

export const Results = () => {
  return (
    <>
      <h2>Results</h2>

      <ul className="list-group" style={{ cursor: 'pointer' }}>
        <li className="list-group-item list-group-item-action">
          <img
            src={getEmojiSrc(GRINNING_EMOJI.symbol)}
            width={32}
            height={32}
          />
          &nbsp;
          {GRINNING_EMOJI.title}
        </li>
        <li className="list-group-item list-group-item-action">
          <img src={getEmojiSrc(JOY_EMOJI.symbol)} width={32} height={32} />
          &nbsp;
          {JOY_EMOJI.title}
        </li>
      </ul>
    </>
  );
};
