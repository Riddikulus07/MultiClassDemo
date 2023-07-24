import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Dash.scss";
import { AiOutlinePlus } from "react-icons/ai";
import TableItem from "../../components/TableItem/TableItem";

const giveAttributes = (data) => {
  const ret = [];
  for (var attribute in data) {
    ret.push(attribute);
  }
  return ret;
};

const Dash = ({ resource, predata }) => {
  const [data, setData] = useState(predata);

  useEffect(() => {
    if (data === null || data === undefined) {
      setData([
        { id: 1, name: "Harsh", family: "Kumar", age: 90 },
        { id: 2, name: "Sai", family: "Madhavan", age: 80 },
        { id: 3, name: "Dhairya", family: "Gupta", age: 70 },
      ]);
    }
  }, []);

  const [creating, setCreating] = useState(false);
  const [object, setObject] = useState(resource.defaultValue);

  var key = 1,
    key2 = 1;
  return (
    <div className="Dash text-center">
      <Header
        title={resource.altName}
        description={`Manage the ${resource.name} resource using the following tools`}
      />
      <button
        className="createbtn btn btn-dark"
        onClick={() => {
          if (creating) {
            // write the create call here
            setCreating(false);
          } else setCreating(true);
        }}
      >
        {creating ? (
          "Done"
        ) : (
          <>
            Create <AiOutlinePlus size={25} />
          </>
        )}
      </button>
      {data === null || data === undefined || data.length === 0 ? (
        <div className="error m-5">No data found!</div>
      ) : (
        <table className="table table-success table-striped">
          <thead>
            <tr>
              {giveAttributes(data[0]).map((e) => {
                return (
                  <th scope="col" key={e}>
                    {e}
                  </th>
                );
              })}
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return <TableItem data={e} key={key++} editing={true} />;
            })}

            {creating ? (
              <tr>
                <th scope="row"></th>
                {resource.attributes.slice(1).map((e) => {
                  return (
                    <td key={key2++}>
                      <input
                        type="text"
                        placeholder={e.name}
                        onChange={(event) => {
                          var newObject = object;
                          newObject[e.name] = event.target.value;
                          setObject(newObject);
                        }}
                      />
                    </td>
                  );
                })}
                <td></td>
              </tr>
            ) : null}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dash;
