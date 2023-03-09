import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Results } from './Results';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';
import { useLocalStorage } from './hooks/useLocalStorage';

const MAX_RECENT_EMOJIS = 5;

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

  const [recentEmojis, setRecentEmojis] = useLocalStorage('recent-emojis', []);

  const onCopy = (emoji) => {
    const nextRecentEmojis = [emoji, ...recentEmojis.filter(({ title }) => title !== emoji.title)];
    while (nextRecentEmojis.length > MAX_RECENT_EMOJIS) {
      nextRecentEmojis.pop();
    }
    setRecentEmojis(nextRecentEmojis);
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

      {recentEmojis.length > 0 && <Results title={'Recent'} emojis={recentEmojis} />}

      <br />

      <Results title={'Results'} emojis={emojis} onCopy={onCopy} />
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
