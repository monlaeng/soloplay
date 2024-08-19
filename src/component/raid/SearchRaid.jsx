import React from 'react';

function SearchRaid({data}) {
    return (
        <div>
            <h5>-레이드목록-</h5>
            {data.map((item, index) => (
                <div>{item.merchantName}</div>
            ))}
        </div>
    );
}

export default SearchRaid;