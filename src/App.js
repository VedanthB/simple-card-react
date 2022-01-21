import "./styles.css";

// props
/*
card : {
  label, 
 primaryText, 
 secondarytext, 
 description, 
 buttonText,
 }, 
onButtonClick
*/

export default function App() {
  return (
    <div className="container">
      <div className="cardContainer">
        {/* <img src="https://picsum.photos/300/200" alt="" /> */}
        <div className="cardContent">
          <p className="typographyLabel">Word of the Day</p>
          <h5 className="typograpgyTextPrimary">be.nev.o.lent</h5>
          <div className="typograpgyTextSecondary">adjective</div>
          <div className="typograpgyBody" variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </div>
        </div>

        <div className="cardActions">
          <button className="cardActionButton"> LEARN MORE </button>
        </div>
      </div>
    </div>
  );
}
