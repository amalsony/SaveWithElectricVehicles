import classes from "./About.module.css";

export default function Calculator() {
  return (
    <div className={classes.about}>
      <h1>About</h1>
      <div className={classes.aboutText}>
        <p>
          This website is a part of an IB Group 4 project by Amal, Ahaan,
          Vedant, Ryan and Shriya to help people understand the benefits of
          switching to an electric vehicle.
        </p>
        <p>
          This open-source code was written by Amal Palackal and is available on
          GitHub.
        </p>
      </div>
    </div>
  );
}
