import React, { useState } from 'react';
import { Header } from './Header';
import { Results } from './Results';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';

export default function App() {
  const [emojis, setEmojis] = useState(ALL_EMOJIS);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const nextEmojis = search(query);
    setEmojis(nextEmojis);
  }, [query]);

  const onChange = (query) => {
    setQuery(query);
  };

  return (
    <div class="container">
      <Header />
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={onChange}
      />

      <hr />

      <Results emojis={emojis} />
    </div>
  );
}

const search = (query) => {
  query = query.toLowerCase();
  return ALL_EMOJIS.filter((emoji) => {
    const title = emoji.title.toLowerCase();
    const keywords = emoji.keywords.toLowerCase();
    return title.includes(query) || keywords.includes(query);
  });
};
