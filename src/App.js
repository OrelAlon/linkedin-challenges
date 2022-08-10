// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// import CounterThree from "./CounterThree";
// import DataFetchingOne from "./DataFetchingOne";
// import DataFetchingTwo from "./DataFetchingTwo";
// import Example from "./Example";
// import { ExampleProvider } from "./TestContext";
// import AxiosVsFetch from "./AxiosVsFetch";
import "./App.css";

//linkedin challenges:
import ColorRenderer from "./ColorRenderer/ColorRenderer";
import DarkMode from "./DarkMode/DarkMode";
import FormValidator from "./FormValidator/FormValidator";
import DogPics from "./DogPics/DogPics";
import ScoreKeeper from "./ScoreKeeper/ScoreKeeper";
import ToggleWindowEvent from "./ToggleWindowEvent/ToggleWindowEvent";
import ColorPicker from "./ColorPicker/ColorPicker";
import PixelArt from "./PixelArt/PixelArt";
import { SimpleCalculator } from "./SimpleCalculator/SimpleCalculator";
import FocusInput from "./FocusInput/FocusInput";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import PixelArt2 from "./PixelArt2/PixelArt2";
import { UseReducer } from "./UseReducer/UseReducer";
import UseContext from "./UseContext/UseContext";
import { createContext } from "react";

export const NamesContext = createContext();

function App() {
  const names = [
    { id: "1", fName: "orel" },
    { id: "2", fName: "tal" },
    { id: "3", fName: "ofir" },
  ];
  return (
    // <ExampleProvider>
    <NamesContext.Provider value={{ names }}>
      <div className='App'>
        <h3>linkedin challenges: </h3>

        {/* <ColorRenderer /> */}
        {/* <DarkMode /> */}
        {/* <FormValidator /> */}
        {/* <DogPics />*/}

        {/* <ScoreKeeper /> */}
        {/* <ToggleWindowEvent />  */}
        {/* <ColorPicker /> */}
        {/* <PixelArt /> */}
        {/* <SimpleCalculator /> */}
        {/* <FocusInput /> */}

        {/* <ShoppingCart /> */}
        {/* <PixelArt2 /> */}
        {/* <UseReducer /> */}
        <UseContext />
        {/*  */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* <Example /> */}
        {/* <AxiosVsFetch /> */}
      </div>
      {/* // </ExampleProvider> */}
    </NamesContext.Provider>
  );
}

export default App;
