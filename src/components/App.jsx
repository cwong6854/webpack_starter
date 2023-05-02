import "../../styles/index.scss";
import Recipes from "./Recipes";
import recipe_4 from "../images/recipe_4.jpeg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hi, React</h1>
          <img src={recipe_4} width={"100%"} height={250}></img>
        </section>
      </main>
      <Recipes />
    </>
  );
};

export default App;
