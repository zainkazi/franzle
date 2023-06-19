import backgroundVideo from "../assets/homepage-short.mp4";

const BackgroundVideo = () => {
  return (
    <video
      className="background-video"
      src={backgroundVideo}
      autoPlay
      muted
      loop
    />
  );
};

export default BackgroundVideo;
