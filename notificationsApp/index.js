function Notification(props) {
  // Write your code here.
  const { text, imgsrc, innercard, cardcolor } = props;
  return (
    <div className="`card ${cardcolor}`">
      <img src="`${}`" className=" `${innercard}" />
      <p>{text}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1>Notification</h1>
    <div className="card-container">
      <Notification
        text="information message"
        imgsrc=""
        innercard="inner-card"
        cardcolor="cardcolor1"
      />
      <Notification
        text="Success Message"
        imgsrc=""
        innercard="inner-card"
        cradcolor="cardcolor2"
      />
      <Notification
        text="Warning Message"
        imgsrc=""
        innercard="inner-card"
        cradcolor="cardcolor3"
      />
      <Notification
        text="Error Message"
        imgsrc=""
        innercard="inner-card"
        cradcolor="cardcolor4s"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
