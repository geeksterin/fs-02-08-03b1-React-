import React from "react";
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
  return (
    <div>
      <h1>B</h1>
      <p className={`${style.para}`}>I am inside B</p>
      <p className={`${style.sec_para}`}>I am inside B , my color is indigo</p>
      <G />
    </div>
  );
}

export default B;
