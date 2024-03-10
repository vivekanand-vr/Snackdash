// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/vivekanand-vernekar/"
        target="_blank"
        title="vivekanand's github"
      >
      Vivekanand Vernakar
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Snack<span>Dash</span>
        </strong>
    </div>
  );
};

export default Footer;
