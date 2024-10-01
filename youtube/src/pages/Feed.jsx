import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card"; // Card bileşenini unutmuş olabilirsiniz

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="overflow-y-auto flex flex-col gap-10">
            {videos &&
              videos.map(
                (item) =>
                  item.type === "videos" && (
                    <Card video={item} key={item.videoId} />
                  )
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
