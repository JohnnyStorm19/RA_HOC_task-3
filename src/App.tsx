import "./App.css";
import * as data from "./data/data.json";
import MonthTable from "./components/MonthTable";
import SortTable from "./components/SortTable";
import YearTable from "./components/YearTable";
import { dataToState } from "./helpers/dataToState";

function App() {
      const yearList = dataToState(data.list, 'yearTable');
      const monthList = dataToState(data.list, "monthTable");
      const sortList = dataToState(data.list, "sortTable");

  return (
    <div id="app">
      <YearTable list={yearList} />
      <MonthTable list={monthList} />
      <SortTable list={sortList} />
    </div>
  );
}

export default App;
