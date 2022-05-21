import { useEffect, useState } from "react";

export const FetchComponent = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0,
  });

  // ここでuseEffectを使ってstar数を取得してみましょう!
  useEffect(() => {
    const fetchRepositoryStarCount = async () => {
      const response = await fetch(
        "https://api.github.com/repos/facebook/react",
        { method: "GET" }
      );
      const json = await response.json();
      setData({
        subscribers: json.subscribers_count,
        stars: json.stargazers_count,
      });
    };

    fetchRepositoryStarCount();
  }, []);

  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{data.stars} stars</p>
    </div>
  );
};
