function Footer({ onScrollToTop }) {
  return (
    <footer className="footer">
      <p>&copy; 2024 TechStore. All rights reserved.</p>
      <button
        onClick={onScrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "80px",
          padding: "10px",
          border: "1px solid blue",
          borderRadius: "20px",
          backgroundColor: "lightskyblue",
        }}
      >
        BACK
      </button>
    </footer>
  );
}

export default Footer;
