import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    <ul>
        <li status={isOnline}></li>
        <li src={avatar} alt="User avatar"></li>
        <li name={name}></li>
    </ul>
}

FriendListItem.propTypes = {
    friennd: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    )
}