import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  
  const dispatch = useDispatch()
  
  const addToCollection = (item) => {  
    dispatch(addCollection(item))
    dispatch(addedToast())
  }

  return (
    <div className="relative w-[18vw] h-[18vw] bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank">
        {item.type == "photo" ? (
          <img
            src={item.src}
            alt="Image loading"
            className="h-full w-full object-cover object-center"
          ></img>
        ) : (
          ""
        )}

        {item.type == "video" ? (
          <video
            autoPlay
            loop
            muted
            src={item.src}
            alt="Video loading"
            className="h-full w-full object-cover object-center"
          ></video>
        ) : (
          ""
        )}

        {item.type === "gif" ? (
          <img
            src={item.src}
            alt={item.title || "GIF"}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          ""
        )}
      </a>
      <div className="flex justify-between items-center gap-2 w-full  absolute  px-6 py-5 bottom-0 text-white bg-linear-to-b from-transparent to-black">
        <h2 className="text-m font-semibold capitalize h-12 overflow-hidden">{item.title}</h2>
        <button 
        className="bg-indigo-600 text-white rounded px-3 py-2 cursor-pointer font-medium active:scale-95" 
        onClick={() => {
          addToCollection(item)
        }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;