import Loader from "@/components/ui/shared/Loader";
import DContainer from "@/layout/DContainer";
import { useGetAllSupplyQuery } from "@/redux/features/supply/supplyApi";
import { TGoodsData } from "@/types/supply.typs";
import Chart from "react-google-charts";

const Dashboard = () => {
  const donationDat = [
    ["Task", "Donation Amount"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
    ["Sleep", 7],
  ];

  const options = {
    title: "Donation Amount",
  };

  const { data, isLoading } = useGetAllSupplyQuery({});
  if (isLoading) {
    return <Loader />;
  }

  const donationData = data.data.map((item: TGoodsData) => {
    return [item.category, Number(item.amount)];
  });

  donationData.unshift(["Task", "Donation Amount"]);

  console.log(donationData);

  return (
    <DContainer className="lg:overflow-hidden">
      <Chart
        className="w-full min-h-screen h-full"
        chartType="PieChart"
        data={donationDat}
        options={options}
        width={"100%"}
      />
    </DContainer>
  );
};

export default Dashboard;
