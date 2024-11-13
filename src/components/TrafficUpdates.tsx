import { useEffect, useState } from 'react';
import { fetchTrafficData } from '../utils/fetchTrafficData';

const TrafficUpdates = () => {
  const [trafficData, setTrafficData] = useState<any>(null);

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
        {trafficData.map((update: any, index: number) => (
          <li key={index}>{update.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrafficUpdates;