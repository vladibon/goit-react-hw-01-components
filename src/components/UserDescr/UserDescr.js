import PropTypes from 'prop-types';

function UserDescr({ name, tag, location, profileUrl }) {
  return (
    <div className="description">
      <img className="avatar" src={profileUrl} alt="Аватар пользователя" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
}

UserDescr.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
};

export default UserDescr;
