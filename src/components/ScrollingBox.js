import React from "react";
import PropTypes from "prop-types";
import classnames from "clsx";
import styles from "../styles/scrollingbox.module.less";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft } from "@fortawesome/pro-light-svg-icons/faChevronLeft.js";
// import { faChevronRight } from "@fortawesome/pro-light-svg-icons/faChevronRight.js";

const getListStyles = (index) => {
  // get the number in the array to place the item in the grid for ie11
  const position = index + 1;

  return {
    msGridColumn: `${position}`,
  };
};

const ScrollingBox = ({ items, itemWidth, itemIsLink }) => {
  const length = items.length;
  // 50% will always show 2 items plus a sliver of the 3rd
  const columnDefinition = {
    gridTemplateColumns: `repeat(${length}, ${itemWidth}px)`,
    msGridColumns: `(${itemWidth}px)[${length}]`,
  };
  //   const hideArrowsColumnDefinition = {
  //     gridTemplateColumns: `10px repeat(${length}, ${itemWidth}px) 10px`,
  //     msGridColumns: `(${itemWidth}px)[${length}]`,
  //   };

  return (
    <div className={styles.cgds_scrollingBox_wrapper}>
      <ul
        className={styles.cgds_scrollingBox_itemList}
        style={columnDefinition}
        role="tablist"
        tabIndex={0}
        aria-orientation="horizontal"
        //ref={listRef}
      >
        {items.map((item, index) => (
          <li
            className={classnames(
              styles.cgds_scrollingBox_item,
              !!itemIsLink && styles.cgds_scrollingBox_item_link
            )}
            // eslint-disable-next-line react/no-array-index-key
            key={`scrolling-box-item-${index}`}
            style={getListStyles(index)}
            role="tab"
            //ref={index === items.length - 1 ? lastItemRef : null}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

ScrollingBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  itemWidth: PropTypes.string,
  itemIsLink: PropTypes.bool,
};

ScrollingBox.defaultProps = {
  items: [],
  itemWidth: "250",
  itemIsLink: true,
};

export default ScrollingBox;
