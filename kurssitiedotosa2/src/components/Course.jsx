const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name}
      {exercises}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      {content.map((part) => (
        // `key`-proppi React voi tehokkaasti tunnistaa jokaisen elementin ja käsitellä niitä oikein, kun lista muuttuu.
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};
const Total = ({ total }) => {
  // Reduce-metodi kaikkien osien exercises määrän laskemiseksi yhteen.
  // reduce käy läpi jokaisen total-taulukon osan osat ja laskee yhteen niiden
  // exercises-kentän arvot.
  // Alkuarvo summalle sum on 0.
  const kaikkiYhteen = total.reduce((sum, osat) => sum + osat.exercises, 0);
  return (
    <div>
      <p>total of {kaikkiYhteen} exercises</p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default Course;
