import React from "react";

interface BadgesProps {
  badges: ("colab" | "discord" | "discourse")[];
  colabUrl: string;
  discordUrl?: string;
  discourseUrl?: string;
}

const Badges: React.FC<BadgesProps> = ({
  badges,
  colabUrl,
  discordUrl = "https://discord.com/invite/bxnwugmNZg",
  discourseUrl,
}) => {
  const renderBadge = (url: string, altText: string, imgSrc: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={altText} />
    </a>
  );

  return (
    <div className="flex flex-wrap gap-3 not-prose">
      {badges.includes("colab") &&
        renderBadge(
          colabUrl,
          "Open in Colab",
          "https://colab.research.google.com/assets/colab-badge.svg"
        )}
      {badges.includes("discord") &&
        renderBadge(
          discordUrl,
          "Discord Community",
          "https://img.shields.io/badge/Join%20Community-%235865F2.svg?&logo=discord&logoColor=white"
        )}
      {badges.includes("discourse") &&
        discourseUrl &&
        renderBadge(
          discourseUrl,
          "Discourse Forum",
          "https://img.shields.io/badge/Ask%20a%20Question-F7C857?logo=discourse&logoColor=black"
        )}
    </div>
  );
};

export default Badges;
