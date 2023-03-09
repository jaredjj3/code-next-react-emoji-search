import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Input } from './Input';
import { Results } from './Results';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';

export default function App() {
  const [emojis, setEmojis] = useState(ALL_EMOJIS);
  const [query, setQuery] = useState('');

  return (
    <div class="container">
      <Header />
      <Input />
      
      <hr />

      <Results emojis={emojis} />
    </div>
  );
}
