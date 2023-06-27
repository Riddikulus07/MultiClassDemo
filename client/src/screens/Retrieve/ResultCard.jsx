import { useState } from "react";
import "./ResultCard.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ id, city, area, numEmployees, manager }) => {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <tr
        className="ResultCard"
        // onClick={() => {
        //   setShow(!show);
        // }}
      >
        <th scope="row">{id}</th>
        <td>{area}</td>
        <td>{city}</td>
        <td>{numEmployees}</td>
        <td>{manager}</td>
        <td className="options">
          <AiFillEdit
            className="icons"
            size={25}
            onClick={() => {
              navigate("/update", {
                state: {
                  id: id,
                  city: city,
                  area: area,
                  manager: manager,
                  numEmployees: numEmployees,
                },
              });
            }}
          />
          <AiFillDelete
            className="icons"
            size={25}
            onClick={() => {
              navigate("/delete", { state: id });
            }}
          />
        </td>
    </tr>
  );
};

export default ResultCard;
