import TodoItem from "./TodoItem"

function TodoList(props)
{
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr
    
    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
    
            {ActivityArr.length===0?<p>You haven't added anything yet.!</p>:""}
            {
                ActivityArr.map(function(item,index){
                    return <TodoItem id={item.id} item={item} index={index} ActivityArr={ActivityArr} setActivityArr={setActivityArr}/>
                })
            }
          </div>
    )
}

export default TodoList