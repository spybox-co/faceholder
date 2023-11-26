import './Wrapper.scss';

const Wrapper = ({ children, className }) => {
  const classes = {
    root: [className, 'Wrapper'].join(' ').trim()
  };
  return <div className={classes.root}>{children}</div>;
};

export default Wrapper;
