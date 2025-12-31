import { useState, useEffect } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target) return;

    let current = 0;
    const increment = target / 200;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

export default Counter;
