import React from "react";

export default class ToDo extends React.Component {
  state = {
    inputData: "",
    todo: ["Gatsby", "Nextjs"],
  };

  updateTodo = () => {
    this.setState((state) => {
      // const newTodo = state.todo.slice();
      if (state.inputData.length === 0) return;

      const newTodo = [...state.todo];
      newTodo.push(state.inputData);

      return { todo: newTodo, inputData: "" };
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a todo"
          value={this.state.inputData}
          onChange={(e) => this.setState({ inputData: e.target.value })}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              this.updateTodo();
            }
          }}
        />
        <input type="submit" value="Add" onClick={(e) => this.updateTodo()} />
        <input
          type="submit"
          value="Empty"
          onClick={() => this.setState({ todo: [] })}
        />
        <ul>
          {this.state.todo.map((item, index) => (
            <li key={"order" + index + Math.random()}>
              <input
                type="checkbox"
                onChange={(e) => {
                  const target = e.target.nextSibling.parentNode;
                  if (!target.className) {
                    target.className = "done";
                  } else {
                    target.className = "";
                  }
                }}
              />{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
