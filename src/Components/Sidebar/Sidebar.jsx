import React, { useState } from 'react';
import './Sidebar.scss';

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <div className="sidebar">
      {items.map((category, catIndex) => (
        <div key={catIndex} className="sidebar__category">
          <div className="sidebar__category-title">{category.category}</div>
          <ul className="sidebar__menu">
            {category.subcategories.map((item, subIndex) => (
              <li
                key={subIndex}
                className={`sidebar__item ${item.id == activeIndex ? 'sidebar__item--active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {/* <img src={item.icon} alt={item.name}  */}
                <span className="sidebar__icon">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))
      }
    </div >
  );
};

export default Sidebar;
