import { useLoaderData, useNavigation } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Loaders from '../components/Loaders';

const MainHome = () => {
    const data = useLoaderData();
    const loaderPoint = useNavigation();
    if(loaderPoint.state==="loading") return <Loaders/>
    return (
        <div>
            <Banner/>
            <Cards data={data}/>
        </div>
    );
};

export default MainHome;