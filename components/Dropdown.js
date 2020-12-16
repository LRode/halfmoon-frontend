
export default function Dropdown({ sortOptions},{sortId}) {
    return (
        <select id={sortId}>
        {sortOptions.map((s) => (
           <option>{s}</option>
        ))}</select>
    )
}
