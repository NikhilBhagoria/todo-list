import React from "react";

const ToDoList = () => {
    return (
        <div className="row">
            <div className="justify-content-center align-items-center d-flex min-vh-100">
                <div>
                    <h1>Todo-List</h1>
                    <div className="col-md-12">
                        <input type="text" name="" id="" className="me-2" />
                        <input type="date" name="" id="" className="me-2" />
                        <button className="btn btn-warning">+</button>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between ">
                        <button type="button" className="btn btn-dark">Filter</button>
                        <button type="button" className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ToDoList;