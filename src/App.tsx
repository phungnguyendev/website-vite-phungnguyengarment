import { Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import Main from './components/layout/Main'
import { routes } from './types/routes'

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
