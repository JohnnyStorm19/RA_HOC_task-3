import { IComponentsProps } from "../types/models";

function YearTable(props: IComponentsProps) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                    {props.list.map((item, id) => (
                        <tr key={id}>
                            <td>{item.year}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default YearTable