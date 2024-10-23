
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer'
import '@/assets/styles/globals.css';
export const metadata = {
    title: "property plus",
    keywords: "rental, property, real estate",
    description: "find perfect rental property"
}
const Mainlayout = ({children}) => {
    return ( 
    <html>
        <body>
            <Navbar/>
            <main> {children}</main>
          <Footer/>
        </body>
    </html> );
}
 
export default Mainlayout;