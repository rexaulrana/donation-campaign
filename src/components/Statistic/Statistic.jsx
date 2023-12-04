import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Statistic = ({ donationsLength }) => {
  const addedLsDontaion = JSON.parse(localStorage.getItem("donations"));
  const addedLsLength = addedLsDontaion.length;
  console.log(addedLsDontaion);
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
    <div>
      <h4>PIE Chart</h4>
      <div>
        <PieChart width={900} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Statistic;
