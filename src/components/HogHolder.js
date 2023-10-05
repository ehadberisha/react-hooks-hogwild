import HogCard from "./HogCard";

function HogHolder({ hogs }) {
  const hogElement = hogs.map((hogObject) => {
    return (
      <HogCard
        key={hogObject.name}
        name={hogObject.name}
        image={hogObject.image}
      />
    );
  });

  return <div>{hogElement}</div>;
}
export default HogHolder;
