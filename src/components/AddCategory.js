import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ addCategory }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.length > 0) {
            addCategory(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
};
