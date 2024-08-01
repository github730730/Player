import React from 'react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type DataPoint = {
  x: string;
  y: [number, number, number, number];
};

const generateData = (baseValue: number, count: number): DataPoint[] => {
  const data: DataPoint[] = [];
  let value = baseValue;
  const now = new Date().getTime();

  for (let i = 0; i < count; i++) {
    const open = value;
    const close = open + (Math.random() * 20 - 10);
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;
    value = close; // Update value for next iteration
    data.push({
      x: new Date(now - i * 60000).toISOString(),
      y: [open, high, low, close],
    });
  }
  return data.reverse(); // Reverse to display from left to right
};

const Chart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>(generateData(100, 20));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = generateData(prevData[prevData.length - 1].y[3], 1);
        return [...prevData.slice(1), ...newData];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      background: '#1E293B',
    },
    title: {
      text: 'Dynamic K-Line Chart',
      align: 'left',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px',
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00FF00',
          downward: '#FF0000',
        },
      },
    },
    theme: {
      mode: 'dark',
    },
    tooltip: {
      theme: 'dark',
    },
  };

  return (
    <div className="h-full min-h-[480px] w-full overflow-hidden rounded-xl bg-slate-900 ring ring-slate-500">
      <div className="h-full w-full">
        <div id="chart" className="h-full w-full rounded-lg bg-black p-4">
          <ReactApexChart
            options={options}
            series={[{ data }]}
            type="candlestick"
            height="100%"
            width="100%"
          />
          <div className="mt-2 text-center text-white">
            <p>Current Round: 28319</p>
            <p>Online Players: 123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
