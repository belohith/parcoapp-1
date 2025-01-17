import React, { useState } from "react";

function ItemTable({ items }) {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <table className="item-table">
      <thead>
        <tr>
          <th style={{ color: "#aaaaaa" }}>Items</th>
          <th style={{ color: "#aaaaaa" }}>Total Value</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <React.Fragment key={item.name}>
            {/* Main Row */}
            <tr
              className={expandedRows[index] ? "row-expanded" : ""}
              onClick={() => toggleRow(index)}
            >
              <td>
                <span
                  className="item-name"
                  style={{ backgroundColor: item.color }}
                >
                  {item.name}
                </span>
              </td>
              <td>
                <span
                  className="item-value"
                >
                  
                {`$${item.value.toLocaleString()}`}
                </span>
              </td>
              <td >
                <span
                  className="arrow"
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  {expandedRows[index] ? "˄" : "˅"}
                </span>
              </td>
            </tr>
            {/* Expandable Content */}
            {expandedRows[index] && (
              <tr className="expandable-content">
                <td colSpan="2">
                  <div className="expandable-box">
                    <div className="expandable-columns">
                      <div className="expandable-column labels-column">
                        <strong>Risk Level</strong><br/><hr style={{ border: "none", borderTop: "1px solid #dddddd" }} />
                        <strong>Examples</strong><br/><br/><hr style={{ border: "none", borderTop: "1px solid #dddddd" }}/>
                        <strong>Description</strong>
                      </div>
                      <div className="expandable-column values-column">
                        <span>10</span><br/><hr style={{ border: "none", borderTop: "1px solid #dddddd" }}/>
                        <span>Apple, Google, Microsoft, Meta, Tesla</span><br/><hr style={{ border: "none", borderTop: "1px solid #dddddd" }}/>
                        <span>
                          Very volatile, will reap the most rewards from good
                          years and the worst losses of bad years
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default ItemTable;
