import Link from "next/link"
import { useRouter} from 'next/router'
import React,{useState} from 'react'
export default function Header() {

    const[toggle,setToggle] = useState(false);
    const ToggleAction = () =>{
      setToggle(!toggle);
    }

    const closeResourceDrop = () => {
      setResourceDrop(false);
      // setToggle(false);
      
    };

    return (
      <header>
        <div className="contain">
          <div className="logo">
              <Link href="/">
                  <img src="/images/logo.svg" alt="" />
              </Link>
          </div>
          <div className={toggle ? "toggle active" : "toggle"} onClick={ToggleAction}><span></span></div>
          <nav id="nav" className={toggle ? "active" : ""}>
            <ul>
                <li><Link href="/sellers" onClick={ToggleAction}>Sell</Link></li>
                <li><Link href="/buyers" onClick={ToggleAction}>Buy</Link></li>
                <li ><Link href="/search-agent" onClick={ToggleAction}>Agents</Link></li>
                <li ><Link href="/contact" onClick={ToggleAction}>Contact us</Link></li>
                <li><Link href="/login" className="site_btn" onClick={ToggleAction}>Login</Link></li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    )
  }