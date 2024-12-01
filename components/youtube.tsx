"use client";
import YouTube, { YouTubeProps } from "react-youtube";

export const YT = (props: YouTubeProps) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] my-6">
      <YouTube
        {...props}
        opts={{
          ...props.opts,
          height: "100%",
          width: "100%",
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}