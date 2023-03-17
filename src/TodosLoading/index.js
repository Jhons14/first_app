import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <p className="LoadingTodo-text">Cargando TODOS</p>
      <span className="LoadingTodo-deleteIcon"></span>
      <span className="LoadingTodo-deleteIcon"></span>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export {TodosLoading};




