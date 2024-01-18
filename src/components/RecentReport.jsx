import { Card, Typography } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";
const TABLE_HEAD = ["Member", "Report ID", "Progress"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    id: 569889,
    value: 65,
  },
  {
    name: "Alexa Liras",
    id: 59678,

    value: 75,
  },
  {
    name: "Laurent Perrier",
    id: 326549,
    value: 15,
  },
  {
    name: "Michael Levi",
    id: 159678,
    value: 95,
  },
  {
    name: "Richard Gran",
   id: 256987,
    value: 55,
  },
];
const RecentReport = () => {
  return (
    <Card className="shadow-lg flex-1 overflow-x-auto ">
      <table className="text-left">
        <thead className="bg-[#ABFB60]">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 py-4 p-2 lg:p-4 "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, id, value }) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="py-4 p-2 lg:p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="py-4 p-2 lg:p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {id}
                </Typography>
              </td>
              <td className="py-4 p-2 lg:p-4">
                <Progress value={value} color="light-green" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default RecentReport;
