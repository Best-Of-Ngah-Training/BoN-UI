import ChartBar from "../../Components/ChartBar.jsx";
import GaugeChart from "../../Components/ChartGauge.jsx";
import PieChart from "../../Components/ChartPie.jsx";
import Layout from "../../Layout/Layout.jsx";

function Dashboard() {
  return (
    <Layout>
      <PieChart />
      <GaugeChart />
      <ChartBar />
    </Layout>
  );
}

export default Dashboard;
