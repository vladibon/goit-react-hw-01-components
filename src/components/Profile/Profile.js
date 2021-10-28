import PropTypes from 'prop-types';

export const Profile = ({
  name,
  tag,
  location,
  profileUrl,
  stats: { followers, views, likes },
}) => {
  return (
    <div className='profile'>
      <div className='description'>
        <img className='avatar' src={profileUrl} alt={`${name} avatar`} />
        <p className='name'>{name}</p>
        <p className='tag'>@{tag}</p>
        <p className='location'>{location}</p>
      </div>

      <ul className='stats'>
        <li>
          <span className='label'>Followers</span>
          <span className='quantity'>{followers}</span>
        </li>
        <li>
          <span className='label'>Views</span>
          <span className='quantity'>{views}</span>
        </li>
        <li>
          <span className='label'>Likes</span>
          <span className='quantity'>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
