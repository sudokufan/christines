import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
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
      <div className="footerContent">b</div>
      <div className="footerContent">c</div>
    </footer>
  );
}

export default Footer;
