import Button from '../../components/atoms/button';

export default function Home() {
  const click = () => {
    console.log('clicked.');
  };

  return (
    <div>
      <Button
        children="送信する"
        color="red"
        size="large"
        disabled={true}
        onClick={click}
      />
    </div>
  );
}
