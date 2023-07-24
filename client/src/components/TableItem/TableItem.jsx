import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./TableItem.scss";
import { useState } from "react";

const giveFirstValue = (data) => {
  for (var attribute in data) return data[attribute];
  return null;
};

const giveRest = (data) => {
  const ret = [];
  var first = true;
  for (var attribute in data) {
    if (first) first = !first;
    else ret.push(attribute);
  }
  return ret;
};

const TableItem = ({ data }) => {
  var key = 1;
  const [editing, setEditing] = useState(false);
  const [object, setObject] = useState(data);

  if (editing) {
    return (
      <tr>
        <th scope="row" key={0}>
          {giveFirstValue(object)}
        </th>
        {giveRest(object).map((e) => {
          return (
            <td key={key++}>
              <input
                type="text"
                defaultValue={object[e]}
                onChange={(event) => {
                  var newObject = object;
                  newObject[e] = event.target.value;
                  setObject(newObject);
                }}
              />
            </td>
          );
        })}
        <td>
          <button
            className="btn btn-dark"
            onClick={() => {
              setEditing(false);
            }}
          >
            Done
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <th scope="row" key={0}>
        {giveFirstValue(object)}
      </th>
      {giveRest(object).map((e) => {
        return <td key={key++}>{data[e]}</td>;
      })}
      <td>
        <AiFillEdit
          className="tableicon"
          size={27}
          onClick={() => {
            setEditing(true);
          }}
        />
        <AiFillDelete className="tableicon" size={27} />
      </td>
    </tr>
  );
};

export default TableItem;
