import React from 'react'
import todos from '../modules/todos'


const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.done} onClick={() => onToggle(todo.id)}/>
            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};



const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }
    const onChange = e => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    )
}

export default Todos