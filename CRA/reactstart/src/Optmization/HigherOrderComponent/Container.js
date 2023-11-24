import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";

function Container() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);
  //   console.log(age);

  //   function handleAge() {
  //     setAge(age + 1);
  //   }

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, []);
  //   console.dir(handleAge);
  //   function handleSalary() {
  //     setSalary(salary + 1);
  //   }

  const handleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, []);
  return (
    <div>
      <Count count={age} text={"age"} />
      <Button increment={handleAge} text={"age"} />
      <Count count={salary} text={"salary"} />
      <Button increment={handleSalary} text={"salary"} />
    </div>
  );
}

export default Container;
