// import { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import style from './Form.module.css';

// const Form = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = event => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const trimQuery = query.trim();
//     if (!trimQuery) return;
//     onSubmit(trimQuery);
//     setQuery('');
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <button className={style.button} type="submit">
//         <FiSearch size="16px" />
//       </button>
//       <input
//         className={style.input}
//         placeholder="What do you want to write?"
//         name="search"
//         value={query}
//         onChange={handleChange}
//         required
//         autoFocus
//       />
//     </form>
//   );
// };

// export default Form;

import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from './Form.module.css';

const Form = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      onSubmit(inputValue);
      inputRef.current.value = '';
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>
      <input
        className={styles.input}
        placeholder="What do you want to search?"
        name="search"
        ref={inputRef}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
