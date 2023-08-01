import SchoolItem from "./school-item";

const School = () => {
  const classNumber1 = ["1-5", "1-f", "1-в", "1-г", "2-a", "2-б", "1-в"];

  const randomArray = () => {
    const newArray = [];
    classNumber1.forEach((el, id) => {
      newArray.push(
        classNumber1[Math.floor(Math.random() * classNumber1.length)]
      );
    });
    return newArray;
  };
  const schools = [randomArray(), randomArray(), randomArray()];
  return (
    <>
      {schools.map((item, index) => {
        return (
          <div className="scholl-section" key={index}>
            <SchoolItem rooms={item} />
          </div>
        );
      })}
    </>
  );
};
export default School;
