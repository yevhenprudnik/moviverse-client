import React from 'react';

const ScrollableList = ({ items }) => {
  return (
    <div className="nowrap overflow-x-auto" style={{ alignItems: 'top' }}>
      {items.map((item, index) => (
        <div key={index} className="dib w-20" style={{ height: '17rem' }}>
          <div className="br3 h-100 flex flex-column justify-between">
            <img
              className="w4 pointer pa2 grow"
              style={{
                borderRadius: '1rem',
                verticalAlign: 'top',
              }}
              src={item.image}
              alt={item.title}
            />
            <h4
              className="mt0 mb0 ScrollableList__item__title"
              style={{
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
            >
              {item.title}
            </h4>
            <h4
              className="mt0 ScrollableList__item__title"
              style={{
                whiteSpace: 'normal',
                wordWrap: 'break-word',
              }}
            >
              {item.year}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollableList;
