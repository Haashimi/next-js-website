import Link from 'next/link'
import Hero from '@/app/components/Hero';
import InfoBoxes from './components/infoBoxes';
import HomeProperties from './components/HomeProperties';
import connectDB from '@/config/database';
const HomePage = () => {
   connectDB()
    
    return ( 
    <>
        <Hero/>
        <InfoBoxes/>
        < HomeProperties />

    </> 
    );
}
 
export default HomePage;