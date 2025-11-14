interface VideoBackgroundProps {
  className?: string;
  opacity?: number;
}

export const VideoBackground = ({ className = "", opacity = 0.15 }: VideoBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          opacity,
          filter: "blur(3px) brightness(0.7)",
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2020/09/14/50178-458978090_large.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
