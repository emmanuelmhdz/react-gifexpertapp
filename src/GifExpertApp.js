import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const addCategory = category => setCategories([category, ...categories]);

    return (
        <>
            <h2>GifExpert App</h2>
            <AddCategory addCategory={addCategory} />
            <hr />
            <ul>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default GifExpertApp;
