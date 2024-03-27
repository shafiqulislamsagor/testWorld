import ReadCard from "../components/ReadCard";
import { getStore } from "../components/store";

const Read = () => {
    let readCard = getStore()
    return (
        <div className="mb-7 mt-3">
            {
                readCard.map(array=> <ReadCard key={array.bookId} card={array}/>)
            }
        </div>
    );
};

export default Read;