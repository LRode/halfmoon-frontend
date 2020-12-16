export default function Checklist({menuItems}, {menuName}) {
    return (
        <div>
            <button type="button" class="checklist">{menuName}</button>
            {menuItems.map((m) => (
            <div>
            <label>{m}</label>
            <input type="checkbox" /><br /></div>
     ))}
     </div>
    )
}