import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  // Used this state here because it is required by Form component as well as PackingList component
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      })
    );
  }

  return (
    <div className="app">
      <Logo />
      {/* Passed handleAddItems as a prop to form component */}
      <Form onAddItems={handleAddItems} />
      {/* Passed items state as a prop to PackingList component */}
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
