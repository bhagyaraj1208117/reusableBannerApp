function Box(props) {
  // Write your code here.
  const { class, text } = props;
  return (
    <div clasName="`${class}`">
      <p>{text}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div class="box-container">
      <Box class="small" text="small" />
      <Box class="medium" text="medium" />
      <Box class="large" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
