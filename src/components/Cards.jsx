import SigleCard from "./SigleCard";
import { PropTypes } from 'prop-types';

const Cards = ({data}) => {
    
    return (
        <>
        <div className="w-[85%] mx-auto mb-14">
            <h2 className="text-center text-4xl displayed font-bold text-[#131313] mb-7">Books Store</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    data.map((card,idx) => <SigleCard Card={card} key={idx}></SigleCard>)
                }
            </div>
        </div>
        </>
    );
};
Cards.propTypes = {
    data:PropTypes.array.isRequired,
};


export default Cards;