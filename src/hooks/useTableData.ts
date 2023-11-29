import { useState, useEffect } from "react";
import { IRecievedData } from "../types/models";
import { dataToState } from "../helpers/dataToState";

export const useTableData = (data: IRecievedData[], componentName: string) => {
  const [tableData, setTableData] = useState<IRecievedData[]>([]);

  useEffect(() => {
    const sortedDateByComponent = dataToState(data, componentName);

    if (sortedDateByComponent.length > 0) {
      setTableData(sortedDateByComponent as IRecievedData[]);
    }
  }, [data, componentName]);
  
  return { tableData };
};
