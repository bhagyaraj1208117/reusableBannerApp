// Write your code here.
import './index.js'

const component=(props)=>{
    {headerText,description,className}=props;
   return ( <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
    </div>);

}
export default component;


