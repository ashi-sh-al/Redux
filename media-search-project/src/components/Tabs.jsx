import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = ["photos", "videos","gif"];

  const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className="flex justify-center items-center gap-10 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${(activeTab == elem ? 'bg-blue-600' : 'bg-gray-600')} transition px-5 py-2 cursor-pointer active:scale-95 rounded uppercase`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
