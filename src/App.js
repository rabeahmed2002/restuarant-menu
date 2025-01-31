import React from 'react';
import './App.css';
import Menu from "./Menu"
import items from "./data"
import Categories from "./Categories"

const allCategories = ['all', ...new Set(items.map((item)=>items.category))]
console.log(allCategories)

function App() {

  const [menuItems, setMenuItems]=React.useState(items) 
  const [categories, setcategories]=React.useState(allCategories)

  const filterItems=(category)=>{

    if(category==='all') {
      setMenuItems(items)
      return
    }

    const newItems=items.filter((item)=>item.category===category)

    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;