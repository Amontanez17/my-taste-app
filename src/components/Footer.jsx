import "./Footer.css";

function Footer() {
  const githubUrl = "https://github.com/Amontanez17";
  return (
    <div className="footer">
      <p className="footer">
        Built with 💖 by Angela{" \u00A0\u00A0 "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-1.5x"></i>
        </a>
      </p>
    </div>
  );
}

export default Footer;
