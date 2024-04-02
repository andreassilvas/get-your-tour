import PropTypes from "prop-types";

export default function MenuButton({children, onSelectButton, isSelected}){
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelectButton}>{children}</button>
        </li>
    )
}


MenuButton.propTypes = {
    children: PropTypes.string.isRequired,
    onSelectButton: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
  };