function Die(props) {

    let dieFace = "";
  switch (props.value) {
    case 1:
      dieFace = "../public/images/dieFace1.png";
      break;
    case 2:
      dieFace = "../public/images/dieFace2.png";
      break;
    case 3:
      dieFace = "../public/images/dieFace3.png";
      break;
    case 4:
      dieFace = "../public/images/dieFace4.png";
      break;
    case 5:
      dieFace = "../public/images/dieFace5.png";
      break;
    case 6:
      dieFace = "../public/images/dieFace6.png";
      break;
    default:
      break;
  }

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (

        <div
          className={props.isHeld ? "die-face isHeld" : "die-face"}
          onClick={props.holdDice}
          style={{
            backgroundImage: `url(${dieFace})`,
            backgroundSize: "cover",
            opacity: 0.8
          }}
        >
          {/* <h2 className="die-num">{props.value}</h2> */}
        </div>
      )
     
  }
  
  export default Die