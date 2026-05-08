import { useLocation } from "react-router-dom"

const Welcome=()=>{

    let loc=useLocation()

    return (

        <>

        <h1> Welcome {loc.state.name}</h1>

        </>
    )
    
}

export default Welcome