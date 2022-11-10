import classes from "./About.module.css";

export default function Calculator() {
  return (
    <div className={classes.about}>
      <h1>About</h1>
      <div className={classes.aboutText}>
        <p>
          This website is a part of an IB Group 4 project by Amal, Ahaan,
          Vedant, Ayush, Ryan and Shriya to help people understand the benefits
          of switching to an electric vehicle.
        </p>
        <p>
          This open-source code was written by Amal Palackal and is available on{" "}
          <a
            target={"_blank"}
            href="https://github.com/amalsony/SaveWithElectricVehicles"
            className={classes.link}
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
