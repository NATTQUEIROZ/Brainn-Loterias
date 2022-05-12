import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from '../pages/Error/Error'
import Home from '../pages/Home/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>                
                <Route exact path={'/'}>
                    <Home />
                </Route>

                <Route>
                    <Error />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router