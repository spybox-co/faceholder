export const Link = ({ to, target = '_blank', children }) => (
  <a className="Link" href={to} rel="noopener noreferrer" target={target}>
    {children}
  </a>
);
