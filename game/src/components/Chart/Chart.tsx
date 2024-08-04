import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const generateInitialData = () => {
  const data = [];
  for (let i = 0; i <= 45; i += 5) {
    data.push([i, 1]);
  }
  return data;
};

const CrashChart: React.FC = () => {
  const [data, setData] = useState(generateInitialData());
  const [isRunning, setIsRunning] = useState(false);
  const [multiplier, setMultiplier] = useState(1.0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setData((prevData) => {
          const lastPoint = prevData[prevData.length - 1];
          const newPoint = [lastPoint[0] + 1, lastPoint[1] * 1.1];
          return [...prevData, newPoint];
        });
        setMultiplier((prevMultiplier) => prevMultiplier * 1.1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startGame = () => {
    setData(generateInitialData());
    setMultiplier(1.0);
    setIsRunning(true);
  };

  const stopGame = () => {
    setIsRunning(false);
  };

  const options: ApexOptions = {
    chart: {
      id: 'crash-chart',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 45,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#FFFFFF',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 1.0,
      max: 15.0,
      tickAmount: 5,
      labels: {
        formatter: (value) => value.toFixed(2),
        style: {
          colors: '#FFFFFF',
          fontSize: '12px',
        },
      },
    },
    title: {
      text: 'Crash Game Chart',
      align: 'left',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#ff6347'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ec4899'], // 渐变到粉色
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: '#818cf8',
            opacity: 1,
          },
          {
            offset: 50,
            color: '#a855f7',
            opacity: 1,
          },
          {
            offset: 100,
            color: '#ec4899',
            opacity: 1,
          },
        ],
      },
    },
    theme: {
      mode: 'dark',
    },
    grid: {
      borderColor: '#303030',
      strokeDashArray: 7,
    },
    markers: {
      size: 0, // 隐藏圆点
    },
  };

  return (
    <div className="h-full min-h-[480px] w-full overflow-hidden rounded-xl bg-gray-900 ring ring-gray-500">
      <div className="flex justify-between p-4">
        <button
          onClick={startGame}
          className="rounded-md bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Start
        </button>
        <button
          onClick={stopGame}
          className="rounded-md bg-red-600 px-4 py-2 hover:bg-red-700"
        >
          Stop
        </button>
        <div className="text-2xl text-white">
          Multiplier: {multiplier.toFixed(2)}x
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={[{ name: 'Crash', data }]}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CrashChart;
