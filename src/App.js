import SchoolItem from "./components/school/school-item";

const classNumber1 = ["1-5", "1-f", "1-в", "1-г", "2-a", "2-б", "1-в"];

function App() {
  const randomArray = () => {
    const newArray = [];
    classNumber1.forEach((el, id) => {
      newArray.push(
        classNumber1[Math.floor(Math.random() * classNumber1.length)]
      );
    });
    return newArray;
  };
  console.log(randomArray());
  const schools = [
    randomArray(),
    randomArray(),
    randomArray() /* classNumber2, classNumber3 */,
  ];

  return (
    <div className="App">
      {
        /*   <SchoolItem /> */
        schools.map((item, index) => {
          return (
            <div className="scholl-section" key={index}>
              <SchoolItem rooms={item} />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
