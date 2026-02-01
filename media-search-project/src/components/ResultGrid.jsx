import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import {
  setLoading,
  setResults,
  setError,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        if (activeTab == "gif") {
          const response = await fetchGIFs(query);
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_width_small?.url,
            src: item.images.original?.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap justify-evenly items-center h-[80%] gap-2 overflow-auto px-10 py-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
