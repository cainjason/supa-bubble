import supabase from "../config/supabaseClient";
import { usaeEffect, useEffect, useState } from "react";

// components
import BubblesCard from "../components/BubblesCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bubbles, setBubbles] = useState(null);

  useEffect(() => {
    const fetchBubbles = async () => {
      const { data, error } = await supabase.from("bubbles").select();

      if (error) {
        setFetchError("Could not fetch the bubbles");
        setBubbles(null);
        console.log(error);
      }
      if (data) {
        setBubbles(data);
        setFetchError(null);
      }
    };

    fetchBubbles();
  }, []);

  return (
    <div className="page-home">
      {" "}
      Home
      <input
        className="bg-green-300 h-6 w-48"
        type="text"
        placeholder="bubbles"
      />
      bubbles
      <button className="bg-red-400 rounded-sm">Pop Bubbles</button>
      {fetchError && <p>{fetchError}</p>}
      {bubbles && (
        <div className="bubbles">
          <div className="bubbles-grid">
            {bubbles.map((bubbles) => (
              <BubblesCard key={bubbles.id} bubbles={bubbles} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
