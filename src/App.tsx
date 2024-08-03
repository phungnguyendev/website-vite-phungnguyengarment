import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Main from './components/layout/Main'
import routes from './config/route.config'
import PostDetail from './pages/post/components/PostDetail'

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<div>loading...</div>}>
                  <route.component />
                </Suspense>
              }
            />
          )
        })}
        <Route path='posts/:postID' element={<PostDetail />} />
      </Route>
    </Routes>
  )
}

export default App
