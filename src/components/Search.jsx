import { useState } from 'react';

import React from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    name=''
                    id='search-field'
                    placeholder='tab to search a drink'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className='btn'
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={handleSubmit}
                >
                    Search a drink
                </button>
            </div>
        </div>
    );
}

export { Search };
