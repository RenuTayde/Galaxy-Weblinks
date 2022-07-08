import Link from "next/link"
export default function Navbart (){
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
        <div className="topnav" id="myTopnav">
        <ul>
        <li><Link href="/"><a className="listItem">Home</a></Link></li>
        <li><Link href="/about"><a className="listItem">About</a></Link></li>
        <li><Link href="/contact"><a className="listItem">Contact</a></Link></li>
        <li><Link href="/practice"><a className="listItem">Practice</a></Link></li>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
      
    </ul>
    </div>
    )
}