import ChildB from "./ChildB";

function ChildA() {
  return (
    <>
      <div>
        <h1>this is ChildA</h1>
        <ChildB />
      </div>
    </>
  );
}
export default ChildA;
