import { chartBar } from "@charts/lib";

const App = () => {
  const chart = chartBar().root;
  document.getElementById("root")?.appendChild(chart);
};

App();
