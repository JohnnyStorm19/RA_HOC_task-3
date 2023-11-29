import "./App.css";
import * as data from "./data/data.json";
import { useTableData } from "./hooks/useTableData";
import MonthTable from "./components/MonthTable";
import SortTable from "./components/SortTable";
import YearTable from "./components/YearTable";

function App() {

  const { tableData: yearList } = useTableData(data.list, "yearTable");
  const { tableData: monthList } = useTableData(data.list, "monthTable");
  const { tableData: sortList } = useTableData(data.list, "sortTable");

  return (
    <div id="app">
      <YearTable list={yearList} />
      <MonthTable list={monthList} />
      <SortTable list={sortList} />
    </div>
  );
}

export default App;
