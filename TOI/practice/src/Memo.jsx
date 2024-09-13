import React, { useMemo, useState } from "react";

const SumWithoutUseMemo = () => {
    const [trigger, setTrigger] = useState(false);

    const sum = useMemo(() => {
        console.log("redfcwfefe");
        
      let total = 0;
      for (let i = 1; i <= 1000; i++) {
        total += i;
      }
      return total;
    }, []);
  
    return (
      <div>
        <h3>With useMemo</h3>
        <p>Sum of numbers from 1 to 1000: {sum}</p>
        <button onClick={() => setTrigger(!trigger)}>
          Re-render Component
        </button>
      </div>
    );
  };

export default SumWithoutUseMemo;
