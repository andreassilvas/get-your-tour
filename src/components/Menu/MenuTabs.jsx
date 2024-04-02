import Proptypes from 'prop-types';

export default function Tabs({children, buttons, WrapperElements}){
  return (
      <>
      <WrapperElements>{buttons}</WrapperElements>
      {children}
      </>
  )
}

Tabs.propTypes = {
  children: Proptypes.string,
  buttons: Proptypes.object.isRequired,
  WrapperElements: Proptypes.string.isRequired

}