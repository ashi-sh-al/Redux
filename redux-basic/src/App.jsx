import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/features/counterSlice";
import { useState } from "react";

function App() {

  const [num, setNum] = useState(5);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center gap-20">
      <h1 className="text-[50px] ">{count}</h1>
      <div className="flex justify-center items-center gap-10">
        <button
          className="px-8 py-4 bg-gray-200 text-black rounded-2xl active:scale-95 cursor-pointer"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          className="px-8 py-4 bg-gray-200 text-black rounded-2xl active:scale-95 cursor-pointer"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div className="flex justify-center items-center gap-10">
        <input
        className="px-8 py-4 bg-gray-200 text-black border-black"
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value)
        }}
         />
        <button
          className="px-8 py-4 bg-gray-200 text-black rounded-2xl active:scale-95 cursor-pointer"
          onClick={() => {
            dispatch(incrementByAmount(Number(num)));
          }}
        >
          Increse By Amount
        </button>
      </div>
    </div>
  );
}

export default App;
