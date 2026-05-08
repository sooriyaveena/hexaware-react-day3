import { useLocation } from "react-router-dom"

const Result = () => {

  const location = useLocation()

  const data = location.state

  if (!data) {

    return (
      <h1>No Result Data Found</h1>
    )
  }

  return (

    <div>

      <h1>Result Page</h1>

      <h2>Mark1: {data.mark1}</h2>

      <h2>Mark2: {data.mark2}</h2>

      <h2>Mark3: {data.mark3}</h2>

      <h2>Total: {data.total}</h2>

      <h2>Average: {data.avg}</h2>

      <h2>Grade: {data.grade}</h2>

    </div>
  )
}

export default Result;