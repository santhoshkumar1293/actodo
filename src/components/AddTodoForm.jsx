import {useState} from "react"

function AddTodoForm(props)
{
    const ActivityArr = props.ActivityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setnewactivity] = useState("")

    function handleChange(evt)
    {
        setnewactivity(evt.target.value)
    }
    function addActivity()
    {
        setActivityArr([...ActivityArr,{id:ActivityArr.length+1,activity:newactivity}])
    }
    
    return(
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Acitivities</h1>
            <div>
            <input type="text" value={newactivity} onChange={handleChange} className="border border-black rounded bg-transparent p-1" placeholder="Next Activity.?" />
            <button onClick={addActivity} className="bg-black text-white p-1 border  border-black rounded">Add</button>
            </div>
          </div>
    )
}

export default AddTodoForm