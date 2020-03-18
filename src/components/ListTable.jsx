import React from "react";
import { render } from "react-dom";

export const ListTable = props => {
  const { groceryList } = props;
  const tableData = () => {
    return (
      <div>
        {groceryList.map((item, index) => {
          const { id, name, category } = item;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                <button type="button">+</button>
              </td>
              <td>
                <button type="button">-</button>
              </td>
            </tr>
          );
        })}
      </div>
    );
  };
  return (
    <div className="listTable">
      <table id={groceryList.id}>
        <tr>
          <td align="center">
            <div>{tableData()}</div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ListTable;
