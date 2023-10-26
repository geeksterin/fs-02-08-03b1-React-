import React from "react";
import "./Footer.css";

function Footer() {
  const inlineStyle = {
    width: "100%",
    height: "12rem",
    backgroundColor: "red",
    color: "black",
    fontWeight: "bold",
  };

  const h1Style = {
    color: "blue",
  };
  /**
   * backgoundColor:
   * className
   *
   *
   */
  return (
    <div className="main_div">
      <div>
        <h1 style={h1Style}>Out First React Footer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga libero
          a, nemo dolores neque autem praesentium? Ipsum nesciunt ex quod, illum
          voluptate quidem, nulla doloribus sequi consectetur soluta quasi
          dolores.
        </p>
      </div>

      <div>
        <p>Hello</p>
        <p>Para2</p>
        <p>para3</p>
      </div>
    </div>
  );
}

export default Footer;
