import PropTypes from 'prop-types';

function ProfileDescr({ name, tag, location, profileUrl }) {
  return (
    <div className="description">
      <img className="avatar" src={profileUrl} alt="User avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}

ProfileDescr.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
};

export default ProfileDescr;
