import MenuItem from '@mui/material/MenuItem';

const OptionContainer = (props) => {
  const { children, innerRef, innerProps, isFocused, isSelected } = props;
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
};

export default OptionContainer;
