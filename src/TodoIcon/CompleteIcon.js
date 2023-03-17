import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({completed, onComplete}) {
  return (
    <TodoIcon
      type = 'check'
      onClick = {onComplete}
      active = {completed}
    />
  )
}
export {CompleteIcon};