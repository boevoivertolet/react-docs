export const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>

    )
}
