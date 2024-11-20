import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(props)
{
    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,setEusername] = useState()
    const [epassword,setEpassword] = useState()

    function handleUInput(evt)
    {
        setEusername(evt.target.value)
    }

    function handlePInput(evt)
    {
        setEpassword(evt.target.value)
    }
    function Addusers()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Signup Here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="User Name" onChange={handleUInput}></input>
                    <input type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password"onChange={handlePInput}></input>
                    <input type="text" 
                    className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password"></input>
                    <button className="bg-yellow-600 w-24 p-2 rounded-md" onClick={Addusers}>Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup