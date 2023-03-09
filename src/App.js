import React, { useState } from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { Results } from './Results';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';

const SEARCH_LIMIT = 20;
const INITIAL_EMOJIS = ALL_EMOJIS.slice(0, SEARCH_LIMIT);

export default function App() {
  const [emojis, setEmojis] = useState(INITIAL_EMOJIS);

  return (
    <div class="container">
      <Header />
      <Input />
      
      <hr />

      <Results emojis={emojis} />
    </div>
  );
}
