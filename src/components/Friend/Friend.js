import PropTypes from 'prop-types';

function Friend({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
