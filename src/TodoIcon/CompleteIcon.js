import React from "react";
import { TodoIcon } from "./";

function CompleteIcon({completed, onComplete}) {
  return (
    <TodoIcon
      type = 'check'
      color = {completed? 'red': 'pink'}
      onClick = {onComplete}
      active = {completed}
    />
  )
}
export {CompleteIcon};