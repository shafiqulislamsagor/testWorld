import { BallTriangle } from 'react-loader-spinner';

const Loaders = () => {
    return (
        <div className='flex justify-center mt-52'>
            
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loaders;