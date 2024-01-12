import { Card, Typography } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";
const TABLE_HEAD = ["Member", "Job", "Employed", "Progress"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    value: 65,
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
    value: 75,
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
    value: 15,
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
    value: 95,
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
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
                  <th key={head} className="border-b border-blue-gray-100 py-4 p-2 lg:p-4 ">
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
              {TABLE_ROWS.map(({ name, job, date,value }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="py-4 p-2 lg:p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {name}
                    </Typography>
                  </td>
                  <td className="py-4 p-2 lg:p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {job}
                    </Typography>
                  </td>
                  <td className="py-4 p-2 lg:p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
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
 }
 
 export default RecentReport

 
