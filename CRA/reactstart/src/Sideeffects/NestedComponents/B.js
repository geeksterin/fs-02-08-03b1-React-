import React,{useEffect} from "react";
import G from "./G";
import style from "./Css/anyname.module.css";

/**
 * 
 * style={
 * para:{
 * },
 * sec_para:{
 * 
 * }
 * }
 * 
 * 
 */
function B() {

  console.log("Mounting Phase Of B Starts");
  useEffect(() => {
    console.log("Mounting Phase Of B Ends");
  })
  

  return (
    <div>
      <h1>B</h1>
      <G />
    </div>
  );
}

export default B;
