function TodoItem(props)
{
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(deleteid)
    {
        var temparr = ActivityArr.filter(function(item){
            if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
        })

        setActivityArr(temparr)
    }
    return(

        <div className="flex justify-between">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)} >Delete</button>
        </div>
    )
}

export default TodoItem