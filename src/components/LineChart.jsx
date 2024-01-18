import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
const LineChart = () => {
  const { sales } = useSelector((state) => state.stock)
  const totalSales = sales?.map((item)=>(item.amount)) || []
  const date = sales?.map((item)=>new Date(item.createdAt).toLocaleDateString("tr-TR"))
    const chartConfig1 = {
        type: "line",
        height: 240,
        series: [
          {
            name: "Sales",
            data: totalSales,
          },
        ],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          title: {
            show: "",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#ABFB60"],
          stroke: {
            lineCap: "round",
            curve: "smooth",
          },
          markers: {
            size: 0,
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
            categories: date,
          },
          yaxis: {
            labels: {
              style: {
                colors: "#616161",
                fontSize: "12px",
                fontFamily: "inherit",
                fontWeight: 400,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
          },
          tooltip: {
            theme: "dark",
          },
        },
      };
  return (
    <Card className="shadow-lg flex-1 ">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
    >
      <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
        <Square3Stack3DIcon className="h-6 w-6" />
      </div>
      <div>
        <Typography variant="h6" color="blue-gray">
       Total Sales
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="max-w-sm font-normal"
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ratione et tempora ipsa repellat est.
        </Typography>
      </div>
    </CardHeader>
    <CardBody className="px-2 pb-0">
      <Chart {...chartConfig1} />
    </CardBody>
  </Card>
  )
}

export default LineChart