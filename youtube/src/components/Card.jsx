const Card = ({ video }) => {
  return (
    <div className="cursor-pointer">
      {/* Resim alanı */}
      <div>
        console.log(videos)
        <img
          className="rounded-lg w-full h-full"
          src={video.thumbnail[video.thumbnail.length - 1].url}
          alt={video.title}
        />
      </div>

      {/* Alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img src="{video.channelThumbnail[0].url}" alt="" />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
