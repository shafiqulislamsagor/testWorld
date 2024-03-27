import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import SigleTag from '../components/SigleTag';
import Loaders from '../components/Loaders';
import { getStore, getWish } from '../components/store';
import { toast } from 'react-hot-toast';

const CardPage = () => {
    const { id } = useParams();
    // console.log(id);

    const ready = (cardpage) =>{
        let stored = getStore()
        const findCard = stored.find(card => card.bookId === cardpage.bookId)
        if(findCard){
            return toast.error('existed!! Already Read')
        }
        stored = [...stored,cardpage];
        localStorage.setItem('readCard',JSON.stringify(stored))
        toast.success('Successfully!! Read added')

    }
    const wishFun = (cardsdata) =>{
        let stored = getStore();
        let wishStored = getWish();
        const findCard = stored.find(card => card.bookId === cardsdata.bookId);
        const findWishCard = wishStored.find(card => card.bookId === cardsdata.bookId);
        if(findCard){
            return toast.error('already read list added')
        }
        else{
            if(findWishCard){
                return toast.error('already wish list adedd')
            }
            wishStored = [...wishStored,cardsdata];
            localStorage.setItem('wishCard',JSON.stringify(wishStored))
            toast.success('Successfully!! wish added')
        }


    }

    const cardData = useLoaderData();
    
    // console.log(cardData);
    const [currentData, setCurrentData] = useState({})
    useEffect(() => {
        const current = cardData.find(data => data.bookId == id);
        setCurrentData(current)
    }, [cardData, id])
    const { author, image, bookName, publisher, rating, review, tags, totalPages, yearOfPublishing, category } = currentData;
    // console.log(tags);
    const loaderPoint = useNavigation();
    if(loaderPoint.state==="loading") return <Loaders/>
    return (
        <div className='flex flex-col lg:flex-row gap-11 mt-5 lg:mt-14 mb-12 w-[82%] mx-auto'>
            <div className='lg:w-[45%] flex flex-col justify-center px-20 py-16 bg-base-200 rounded-3xl'><img className='w-full' src={image} alt="" /></div>
            <div className='flex-1'>
                <h1 className='displayed text-4xl font-bold blacked'>{bookName}</h1>
                <h2 className='work text-xl font-medium blacked my-4'>By: {author}</h2>
                <div className='border border-dashed'></div>
                <h4 className='work text-xl font-medium blacked my-4'>{category}</h4>
                <div className='border border-dashed'></div>
                <p className='work text-base font-normal mt-5 mb-10'><span className="font-bold">Review:</span> {review}</p>
                <h6 className='flex gap-4 items-center'><span className='font-bold work'>Tag: </span><div className='flex gap-4'>
                    {tags?.map((tag, idx) => <SigleTag tag={tag} key={idx}></SigleTag>)}
                </div></h6>
                <div className='border border-dashed my-5'></div>
                <div className='flex gap-5 items-center blacked'>
                    <div className='work space-y-3'>
                        <h1>Number of Pages:</h1>
                        <h1>Publisher:</h1>
                        <h1>Year of Publishing:</h1>
                        <h1>Rating:</h1>
                    </div>
                    <div className='text-left work font-semibold space-y-3'>
                        <h1>{totalPages}</h1>
                        <h1>{publisher}</h1>
                        <h1>{yearOfPublishing}</h1>
                        <h1>{rating}</h1>
                    </div>
                </div>
                <div className='flex gap-5 mt-8'>
                    <button onClick={()=>ready(currentData)} className='btn btn-outline work text-base font-semibold blacked'>Read</button>
                    <button onClick={()=>wishFun(currentData)} className='btn btn-info work text-base font-semibold text-white'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default CardPage;