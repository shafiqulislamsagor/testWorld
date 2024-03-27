/* eslint-disable no-unused-vars */
import { IoMdStarOutline } from "react-icons/io";
import SigleTag from "./SigleTag";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const SigleCard = ({Card}) => {
    // console.log(Card);
    const {author,image,bookId,bookName,publisher,rating,review,tags,totalPages,yearOfPublishing,category} = Card;
    const tagsAll = tags;
    return (
        <Link  to={`/card/${bookId}`}>
        <div className="border rounded-2xl p-6">
            <div className="h-56 mb-6 py-8 w-full bg-[#F3F3F3] rounded-2xl"><img className="h-full mx-auto" src={image} alt="" /></div>
            <div className="flex gap-4">
                {
                    tagsAll.map((tag,idx) => <SigleTag tag={tag} key={idx}/>)
                }
            </div>
            <h2 className="displayed mt-4 mb-3 text-2xl font-bold leading-[32px] blacked">{bookName}</h2>
            <p className="work text-base font-medium blacked">By: {author}</p>
            <div className="border border-dashed my-5"></div>
            <div className="flex justify-between">
                <h2 className="work text-base font-medium blacked">{category}</h2>
                <div className="flex gap-2 items-center work  font-medium blacked">
                    <h2 className="">{rating}</h2>
                    <IoMdStarOutline/>
                </div>
            </div>
        </div>
        </Link>
    );
};

SigleCard.propTypes = {
    Card:PropTypes.object.isRequired,
};

export default SigleCard;