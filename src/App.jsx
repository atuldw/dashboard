import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./Component/shared/layout"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import Products from "./pages/Products"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App