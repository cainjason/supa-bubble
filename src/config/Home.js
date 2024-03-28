import supabase from "../config/supabaseClient";

const Home = () => {
  console.log(supabase);

  return (
    <div className="page home">
      <h2 className="text-3xl font-bold underline">Home</h2>
      <form type="input" placeholder="Bubbles">
        <input>Bubbles</input>
      </form>
    </div>
  );
};

export default Home;
