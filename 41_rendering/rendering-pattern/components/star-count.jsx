export const StarCount = (props) => {
  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{props.stars} stars</p>
    </div>
  );
};
