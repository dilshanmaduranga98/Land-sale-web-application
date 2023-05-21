import React from 'react'
import { useLocation,useNavigate} from 'react-router-dom'


export default function Header() {

  const location = useLocation();  //----- get current location of page-----//
  const navigate =  useNavigate();  //----- navigate to between pages ----//


  //---- this function use to show what is current location in navigation bar -----//
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
                <div className='flex items-center py-3'>
                    <img src="/araliya-logo.png" alt='araliya_logo' className='h-10 cursor-pointer' onClick={()=>navigate("/")}/>
                </div>
                <div>
                    <ul className='flex space-x-12'>
                      
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-pink-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-white  text-[18px] border-b-pink-600 bg-pink-300"}`} onClick={()=>navigate("/")}>
                          Home
                        </li>
                        
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-pink-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-[18px] text-white border-b-pink-600 bg-pink-300"}`} onClick={()=>navigate("/offers")}>
                          Offers
                        </li>
                        
                        <li className={`cursor-pointer py-3 px-3 text-sm font-semibold text-pink-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signin") && "text-[18px] text-white border-b-pink-600 bg-pink-300"}`} onClick={()=>navigate("/signin")}>
                          Signin
                        </li>
                        
                    </ul>
                </div>
        </header>
    </div>
  )
}
