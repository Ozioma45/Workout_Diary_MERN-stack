import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWWorkouts();
  }, {});
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((Workout) => <p key={Workout._id}>{Workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
