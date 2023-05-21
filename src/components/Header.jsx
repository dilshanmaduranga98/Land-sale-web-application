import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'


export default function Header() {

  const location = useLocation();
  const navigate =  useNavigate();

function pathMatchRoute(route)
{
  if(route === location.pathname)
  {
    return true
  }
}


  return (
    <div className="sticky top-0 z-50 bg-white shadow bgborder-b">
        <header className='flex items-center justify-between px-1 mx-auto max-w-7xl '>
                <div className='py-3'>
                    <img src="/araliya-logo.png" alt='araliya_logo' className='h-8 cursor-pointer' onClick={()=>navigate("/")}/>
                </div>
                <div>
                    <ul className='flex space-x-12'>
                      
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-green-700 bg-green-300"}`} onClick={()=>navigate("/")}>
                          Home
                        </li>
                        
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-green-700 bg-green-300"}`}onClick={()=>navigate("/offers")}>
                          Offers
                        </li>
                        
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signin") && "text-black border-b-green-700 bg-green-300"}`}onClick={()=>navigate("/signin")}>
                          Signin
                        </li>
                        
                    </ul>
                </div>
        </header>
    </div>
  )
}
