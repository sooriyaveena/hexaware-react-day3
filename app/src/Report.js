import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Report = () => {

  const nav = useNavigate();

  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");

  const calculateGrade = () => {

    let total =
      Number(mark1) +
      Number(mark2) +
      Number(mark3);

    let avg = total / 3;

    let grade = "";

    if (avg > 80) {
      grade = "A";
    }

    else if (avg > 60) {
      grade = "B";
    }

    else {
      grade = "C";
    }

    nav("/result", {

      state: {
        mark1,
        mark2,
        mark3,
        total,
        avg,
        grade
      }

    });

  }

  return (

    <div>

      <h1>Report Card</h1>

      <input
        type="number"
        placeholder="Enter Mark 1"
        onChange={(e) => setMark1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Mark 2"
        onChange={(e) => setMark2(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Mark 3"
        onChange={(e) => setMark3(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateGrade}>
        Calculate
      </button>

    </div>
  )
}

export default Report;