import { PropTypes } from 'prop-types';

const SigleTag = ({tag}) => {
    return (
        <h2 className='border rounded-3xl py-1 px-2 bg-[#23BE0A0D] greened work text-base'>#{tag}</h2>
    );
};

SigleTag.propTypes = {
    tag:PropTypes.string.isRequired,
};

export default SigleTag;