import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Edit, Clear, CheckCircle } from "@mui/icons-material";
import MyButton from "./MyButton";
import { ListContext } from "../ListContext";
import "./AddList.css";
const DELAY = 2000;
export default function AddList(props) {
  const { list, setList } = useContext(ListContext);
  const [autoSaved, setAutoSaved] = React.useState(false);
  const [title, setTitle] = React.useState("My Task");
  const textInput = React.useRef(null);
  const handleSaveIcon = setTimeout(() => {
    setAutoSaved(false);
  }, 3000);

  function addItem() {
    const newItem = {
      id: uuidv4(),
      title: "",
      status: "",
    };
    const copyList = list.map((obj) =>
      obj.id === props.id ? { ...obj, item: [...obj.item, newItem] } : obj
    );
    setList(copyList);
  }
  function updateTitle(titleId, title) {
    setAutoSaved(true);
    const copyItem = list.map((obj) =>
      obj.id === titleId ? { ...obj, title: title } : obj
    );
    setTitle(title);
    setList(copyItem);
  }
  function updateItem(itemId, title) {
    setAutoSaved(true);
    const copyItem = list.map((obj) => {
      if (obj.id === props.id) {
        const newItemAdd = obj.item.map((item) =>
          item.id === itemId ? { ...item, title } : item
        );
        return { ...obj, item: newItemAdd };
      } else return obj;
    });
    setList(copyItem);
  }
  function removeItem(itemId) {
    const copyItem = list.map((obj) => {
      if (obj.id === props.id) {
        const newItemAdd = obj.item.filter((item) => item.id !== itemId);
        return { ...obj, item: newItemAdd };
      } else return obj;
    });
    setList(copyItem);
  }
  React.useEffect(() => {
    setTimeout(() => {
      setAutoSaved(false);
    }, DELAY);
  }, []);
  const items = list.map((obj) =>
    obj.id === props.id
      ? obj.item.map(({ id, title }) => (
          <div>
            <input
              key={id}
              placeholder="Enter task"
              value={title}
              onChange={(event) => updateItem(id, event.target.value)}
              onKeyPress={(event) => (event.key === "Enter" ? addItem() : null)}
            />
            <div
              onClick={() => {
                removeItem(id);
              }}
            >
              <Clear />
            </div>
          </div>
        ))
      : null
  );

  return (
    <div id="addList">
      <div id="title--edit">
        <input
          placeholder="My Task"
          value={title}
          onChange={(event) => updateTitle(props.id, event.target.value)}
        />
        <Edit />
      </div>
      <div id="sub--item">{items}</div>
      {autoSaved && (
        <div id="autosaveIcon">
          <CheckCircle />
          <span>Auto saved</span>
        </div>
      )}
      <MyButton
        bgColor={"#b4b9ff"}
        textColor={"#000"}
        parentStyle={{ position: "absolute", bottom: "75px", right: "10px" }}
        click={addItem}
      />
    </div>
  );
}
