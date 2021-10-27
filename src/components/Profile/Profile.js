import PropTypes from 'prop-types';
import ProfileDescr from '../ProfileDescr/ProfileDescr';
import ProfileStats from '../ProfileStats/ProfileStats';

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
      <ProfileDescr name={name} tag={tag} location={location} profileUrl={avatar} />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.object.isRequired,
  }).isRequired,
};

export default Profile;
