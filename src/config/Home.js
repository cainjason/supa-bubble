import supabase from "../config/supabaseClient";
import { usaeEffect, useEffect, useState } from "react";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bubbles, setBubbles] = useState(null);

  useEffect(() => {
    const fetchBubbles = async () => {
      const { data, error } = await supabase.from("bubbles").select();

      if (error) {
        setFetchError("Could not fetch the bubbles");
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="page home">
      <h2 className="text-3xl font-bold underline">Home</h2>
    </div>
  );
};

export default Home;
