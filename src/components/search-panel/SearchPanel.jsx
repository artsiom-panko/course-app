import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
    return (
        <React.Fragment>
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
            />
            <div className="btn-group">
                <button type='button' className="btn btn-info">Search</button>
            </div>
        </React.Fragment>
    )
}

export default SearchPanel;