import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // setCategories([... categories,'Valorant']);
    // setCategories(cat => [newCategory,...cat]);

    if (categories.includes(newCategory))
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      {/* <AddCategory setCategories={setCategories} /> */}

      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }
    </>
  );
};
