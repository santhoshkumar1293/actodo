import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import {useState} from "react"

function TodoContainer()
{
    const [ActivityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        }
    ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm ActivityArr={ActivityArr} setActivityArr={setActivityArr}/>
                <TodoList ActivityArr={ActivityArr} setActivityArr={setActivityArr}/>
          </div>
        </div>
    )
}

export default TodoContainer