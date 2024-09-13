import "./App.css";
import NestedDropdown from "./DropDown";
// import Callback from "./Callback";
// import Debounce from "./Debounce";
// import useCounter from "./useCounter"

// function withGreeting(Component) {
//   return function WrappedComponent(props) {
//     return (
//       <div>
//         <p>Hello, welcome!</p>
//         <Component {...props} />
//       </div>
//     );
//   };
// }

// function plainComponent(props) {
//   return <p>This is the Plain component {props.someProp}</p>;
// }

// const EnhancedComponent = withGreeting(plainComponent);

function App() {
  // const {count,increase,decrease,reset} = useCounter(5);
  return (
    <div>
      <NestedDropdown/>
      {/* <Callback/> */}
      {/* <Debounce/> */}
      {/* <EnhancedComponent someProp="value" />
      <p>Current Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}

export default App;
