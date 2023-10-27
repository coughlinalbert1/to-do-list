export const Task = (props) => {

    return (
        <div
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "white" }}
        >
            <h1>{props.taskName}</h1>
            <button onClick={() => {props.completeTask(props.id)}}>Completed</button>
            <button onClick={() => {props.delTask(props.id)}}>X</button>
        </div>
    );
}