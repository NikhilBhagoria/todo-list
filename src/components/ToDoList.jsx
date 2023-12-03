import React, { useEffect, useState } from "react";
import 'boxicons';

const ToDoList = () => {
    const [storedData, setStoredData] = useState([]);
    const [taskDetails, setTaskDetails] = useState({
        id: "",
        task: "",
        dt: "",
        status: "pending", // Assuming you want to set a default status
        actions: "edit",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (value.length > 0) {
            setTaskDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
                id: Math.random(),
            }));
        }
    }
    const handleSubmit = () => {
        if (taskDetails.task.length > 0 && taskDetails.dt !== "") {
            const newData = [taskDetails, ...storedData];
            setStoredData(newData);
            setTaskDetails({
                id: "",
                task: "",
                dt: "",
                status: "pending",
                actions: "edit",
            });
        }
    }

    // DELETE TASK
    const handleDelete = (id) => {
        const newTodo = storedData.filter((todo) => todo.id !== id);
        setStoredData(newTodo);
    }

    return (
        <div className="row ">
            <div className="justify-content-center align-items-center d-flex min-vh-100">
                <div className="card rounded">
                    <div className="card-body">
                        <h1>Todo-List</h1>
                        <div className="col-md-12">
                            <input type="text" name="task" className="me-2" value={taskDetails.task} onChange={handleChange} />
                            <input type="date" name="dt" className="me-2" value={taskDetails.dt} onChange={handleChange} />
                            <button className="btn btn-warning" onClick={handleSubmit}>+</button>
                        </div>
                        <div className="col-md-12 d-flex justify-content-between ">
                            <button type="button" className="btn btn-dark">Filter</button>
                            <button type="button" className="btn btn-warning">Delete</button>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-bordered">
                                <thead className="table-secondary">
                                    <tr>
                                        <th scope="row">TASK</th>
                                        <th>DUE DATA</th>
                                        <th>STATUS</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storedData.map((item, index) =>
                                        <tr key={index}>
                                            <td scope="row">{item.task}</td>
                                            <td>{item.dt}</td>
                                            <td>{item.status}</td>
                                            <td><button className="btn btn-warning btn-sm me-1"><box-icon name='edit-alt' size="xs"></box-icon></button>
                                                <button className="btn btn-success btn-sm me-1"><box-icon name='check' size="xs"></box-icon></button>
                                                <button className="btn btn-success btn-sm" onClick={() => handleDelete(item.id)}><box-icon name='trash' size="xs"></box-icon></button>

                                            </td>
                                        </tr>
                                    )}
                                    <tr></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ToDoList;