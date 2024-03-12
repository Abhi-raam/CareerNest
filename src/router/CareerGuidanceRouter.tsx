import { Route, Routes } from "react-router-dom"
import CareerGuidanceNavbar from "../Components/CareedGuidance/CareerGuidanceNavbar"
import CareerHome from "../Pages/CareerGuidance/CareerHome"

function CareerGuidanceRouter() {
  return (
    <div>
    <CareerGuidanceNavbar/>
    <Routes>
        <Route path="/" element={<CareerHome />} />
    </Routes>
</div>
  )
}

export default CareerGuidanceRouter