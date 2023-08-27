import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent address">
        <address class="address">
          33 Silver St, Bradford-on-Avon BA15 1JX
        </address>
      </div>
      <div className="footerContent openingHours">
        <span className="hoursTitle">Opening Hours</span>
        <div class="times">
          <ul class="days">
            <li className="listItem">Monday</li>
            <li className="listItem">Tuesday</li>
            <li className="listItem">Wednesday</li>
            <li className="listItem">Thursday</li>
            <li className="listItem">Friday</li>
            <li className="listItem">Saturday</li>
            <li className="listItem">Sunday</li>
          </ul>
          <ul class="hours">
            <li className="listItem">9:15 - 5</li>
            <li className="listItem">9:15 - 5</li>
            <li className="listItem">9:15 - 5</li>
            <li className="listItem">9:15 - 6</li>
            <li className="listItem">9:15 - 5</li>
            <li className="listItem">9:15 - 5</li>
            <li className="listItem">Closed</li>
          </ul>
        </div>
      </div>
      <div className="footerContent links">
        <div class="socialMedia">
          <a href="https://www.facebook.com/ChristinesSustainableSupermarketBOA/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#661a17"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"
              ></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/Christines.ss">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#661a17"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"
              ></path>
            </svg>
          </a>
        </div>
        <a
          class="contact"
          href="mailto:christinessustainablesupermarket@sky.com"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
