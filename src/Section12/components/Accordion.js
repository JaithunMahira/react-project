import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const accordionItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div
          className={`title ${isActive}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div className="ui styled accordion">{accordionItems} </div>;
};

export default Accordion;
