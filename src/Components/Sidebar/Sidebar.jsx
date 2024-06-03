/** Dependencies */
import React, { useState } from 'react';

/** Styles */
import './Sidebar.scss';

const Sidebar = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <div className="sidebar">
      {items.map((category, catIndex) => (
        <div key={catIndex} className="sidebar-category">
          <div className="sidebar-category-title">{category.category}</div>
          <ul className="sidebar-menu">
            {category.subcategories.map((item, subIndex) => (
              <li
                key={subIndex}
                className={`sidebar-item ${item.id == activeIndex ? 'sidebar-item--active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                {/* <img src={item.icon} alt={item.name}  */}
                <span className="sidebar-icon">
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
