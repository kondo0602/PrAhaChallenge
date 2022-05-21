import useData from './use-data';
import TodoBox from './todo-box';

export default function Index() {
  const [data, setData, addData, removeData] = useData();

  return (
    <TodoBox
      data={data}
      setData={setData}
      addData={addData}
      removeData={removeData}
    />
  );
}
