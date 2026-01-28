import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/body/Home.tsx'
import Skills from './component/body/Skills.tsx'
import Books from './component/body/Books.tsx'
import Contacts from './component/body/Contacts.tsx'
import Notes from './component/body/Notes.tsx'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"",element:<Home/>},
      {path:"/skills",element:<Skills/>},
      {path:"/books",element:<Books/>},
      {path:"/contact",element:<Contacts/>},
    ]
  },
  {
    path:"books/class11_notes",
    element:<Notes notes="class11"/>
  },
  {
    path:"books/class12_notes",
    element:<Notes notes="class12"/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
