import ChartBar from "../../Components/charts/ChartBar.jsx";
import ChartGauge from "../../Components/charts/ChartGauge.jsx";
import ChartPie from "../../Components/charts/ChartPie.jsx";
import Layout from "../../Layout/Layout.jsx";

function Dashboard() {
  return (
    <Layout>
      <ChartPie />
      <ChartGauge />
      <ChartBar />
    </Layout>
  );
}

export default Dashboard;
