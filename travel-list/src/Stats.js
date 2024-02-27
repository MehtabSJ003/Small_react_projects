export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All items are packed!"
          : `🧳 You have ${numItems} items in your list, and you already packed${" "}
        ${numPacked} (${percentage || 0}%)`}
      </em>
    </footer>
  );
}
