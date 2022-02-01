import "./style.css";

import React, { useLayoutEffect, useRef, useState } from "react";

import { ToDo } from "../ToDo";

function getSpanHeight(ref) {
  let rowHeight = parseInt(
    window
      .getComputedStyle(ref.current.parentNode)
      .getPropertyValue("grid-auto-rows")
  );
  let rowGap = parseInt(
    window
      .getComputedStyle(ref.current.parentNode)
      .getPropertyValue("grid-row-gap")
  );
  return Math.ceil((ref.current.scrollHeight + rowGap) / (rowHeight + rowGap));
}

function TodoCategory(props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(getSpanHeight(ref));
    window.addEventListener("resize", () => {
      setHeight(getSpanHeight(ref));
    });
  }, [props.children]);

  return (
    <div
      ref={ref}
      className="todo-category"
      style={{ gridRowEnd: "span " + height }}
    >
      {props.children}
    </div>
  );
}

export function Checklist(props) {
  return (
    <div className="Checklist">
      {props.todos.map((c) => (
        <TodoCategory key={c.category}>
          <div className="category-header">
            <img alt="" src={c.icon} />
            <span> {c.category}</span>
          </div>
          <div className="todos">
            {c.todos.map((t) => (
              <ToDo
                name={t.name}
                reset={t.reset}
                period={t.period}
                key={t.name}
              />
            ))}
          </div>
        </TodoCategory>
      ))}
    </div>
  );
}
