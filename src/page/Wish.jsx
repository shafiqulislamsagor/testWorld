import { useNavigation } from "react-router-dom";
import Loaders from "../components/Loaders";
import { getWish } from "../components/store";
import ReadCard from "../components/ReadCard";

const Wish = () => {
    let wishCard = getWish()
    const navigation = useNavigation();
    if(navigation.state==='loading') return <Loaders/>
    return (
        
        <div className="mb-5">
            {
                wishCard.map(array=> <ReadCard key={array.bookId} card={array}/>)
            }
        </div>
    );
};

export default Wish;