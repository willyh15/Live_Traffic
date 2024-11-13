// src/components/TrafficUpdates.tsx

import { useEffect, useState } from 'react';
import { fetchTrafficData } from '../utils/fetchTrafficData';

// Define the structure of each traffic update
interface TrafficUpdate {
  description: string;
}

const TrafficUpdates = () => {
  const [trafficData, setTrafficData] = useState<TrafficUpdate[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrafficData();
      setTrafficData(data);
    };
    getData();
  }, []);

  if (!trafficData) return <p>Loading traffic updates...</p>;

  return (
    <div>
      <h2>Live Traffic Updates</h2>
      <ul>
        {trafficData.map((update, index) => (
          <li key={index}>{update.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficUpdates;