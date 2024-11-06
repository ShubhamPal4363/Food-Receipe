import Food from "./Components/Food"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FoodCard from "./Components/FoodCard"
import FoodInfo from "./Components/FoodInfo"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Food />} />
          <Route path='/FoodCard/:id' element={<FoodCard />} />
          <Route path='/:foodid' element={<FoodInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
