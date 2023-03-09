import React, { useState } from 'react';
import { Header } from './Header';
import { Results } from './Results';
import ALL_EMOJIS from './data/ALL_EMOJIS.json';

export default function App() {
  return (
    <div class="container">
      <Header />
      <input type="text" className="form-control" />

      <hr />

      <Results title={'Results'} />
    </div>
  );
}
