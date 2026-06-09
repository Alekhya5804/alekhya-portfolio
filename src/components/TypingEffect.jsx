import { useEffect, useState } from 'react';

export default function TypingEffect({ words, speed = 80, deleteSpeed = 40, pause = 2000 }) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          if (displayText.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className="gradient-text">
      {displayText}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-brand-500 align-middle" />
    </span>
  );
}
