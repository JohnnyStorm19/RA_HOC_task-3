import { IComponentsProps } from "../types/models";

function MonthTable(props: IComponentsProps) {
    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Month</th>
                        <th>Amount</th>
                    </tr>
                    {props.list.map((item, id) => (
                        <tr key={id}>
                            <td>{item.month}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MonthTable