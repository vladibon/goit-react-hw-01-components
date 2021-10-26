import PropTypes from 'prop-types';
import UserDescr from '../UserDescr/UserDescr';
import UserStats from '../UserStats/UserStats';

function Profile({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className="profile">
      <UserDescr name={name} tag={tag} location={location} profileUrl={avatar} />
      <UserStats followers={followers} views={views} likes={likes} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Profile;
