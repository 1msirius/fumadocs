import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa6";

export function SiteBanner() {
  return (
    <Banner variant="rainbow" id="hello-world">
      <Link
        href="https://github.com/OpenDeepLearningAI/OpenDeepLearning"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        ⭐ Loving ODL? Leave a star! <FaGithubAlt className="ml-2 text-lg" />
      </Link>
    </Banner>
  );
}
