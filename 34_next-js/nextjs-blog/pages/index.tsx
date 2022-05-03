import CardHeader from "../components/molecules/card-header"
import CardBody from "../components/molecules/card-body"

export default function Home() {
  return (
    <div className="container">
      <CardHeader timestamp="Jun 1, 2020" message="Laravel"/>
      <CardBody titleText="Build Your New Idea with Laravel Freamwork." contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"/>
    </div>
  );
}
