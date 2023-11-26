import Icon from '../Icon';

const Button = (props) => {
  const {
    children,
    className,
    label,
    onClick,
    renderIcon,
    kind,
    hasOnlyIcon,
    anchor,
    disabled,
    ...other
  } = props;

  const buttonKind =
    (kind === 'primary' && 'spbx--button--primary') ||
    (kind === 'secondary' && 'spbx--button--secondary') ||
    (kind === 'tertiary' && 'spbx--button--tertiary') ||
    (kind === 'ghost' && 'spbx--button--ghost') ||
    (kind === 'danger' && 'spbx--button--danger') ||
    (kind === 'warning' && 'spbx--button--warning') ||
    (kind === 'green' && 'spbx--button--green') ||
    (kind === 'orange' && 'spbx--button--orange') ||
    // To-Do
    (kind && `spbx--button--custom ${kind}`);

  const classes = [
    className ? className : null,
    'spbx--button',
    hasOnlyIcon && 'spbx--button--icon-only',
    kind ? buttonKind : 'spbx--button--default',
    disabled && 'spbx--button--disabled'
  ]
    .join(' ')
    .trim();

  const Component = anchor ? 'a' : 'button';

  return (
    <Component
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...other}
    >
      {!hasOnlyIcon && !label && children}
      {renderIcon && RenderIconComponent(renderIcon)}
    </Component>
  );
};

export default Button;

const RenderIconComponent = (icon) => {
  if (typeof icon === 'string') {
    return (
      <Icon
        className="spbx--button__icon"
        type={icon}
        stroke={1.75}
        size={20}
      />
    );
  }
  if (typeof icon === 'function') {
    return icon;
  }
  return null;
};
