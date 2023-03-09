import { useEffect } from 'react';
import Clipboard from 'clipboard';

// Visit https://clipboardjs.com/ to learn how to use.
export const useClipboard = (querySelector) => {
  useEffect(() => {
    const clipboard = new Clipboard(querySelector);
    return () => {
      clipboard.destroy();
    };
  }, []);
};
