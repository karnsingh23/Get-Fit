import React from "react";

const AddWorkout = () => {
  return (
    <div>
      <h2>Add New Workout</h2>
      <textarea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
      />
      <button>Add Workout</button>
    </div>
  );
};

export default AddWorkout;
