import "./style.css";

import React, { useLayoutEffect, useRef, useState } from "react";

import { ToDo } from "../ToDo";
import { getSpanHeight } from "../../functions/getSpanHeight";

function TodoCategory(props) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => setHeight(getSpanHeight(ref));

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
