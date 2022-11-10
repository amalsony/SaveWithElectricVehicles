import classes from "./Calculator.module.css";
import { useState } from "react";

export default function Calculator() {
  const [carbon, setCarbon] = useState(0);
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [days, setDays] = useState(0);
  const [fuelEfficiency, setFuelEfficiency] = useState(0);

  const calculate = () => {
    const carbonPerLiter = 2.31;
    const petrolPricePerLiter = 101.94;
    const EVCostPerKm = 0.75317652198;
    const LitersBurnedPerDay = distance / fuelEfficiency;
    const LitersBurnedPerWeek = LitersBurnedPerDay * days;
    const CarbonBurnedPerWeek = LitersBurnedPerWeek * carbonPerLiter;

    const price =
      LitersBurnedPerWeek * petrolPricePerLiter * 52 -
      distance * EVCostPerKm * 7 * 52;

    setCarbon(Math.round(CarbonBurnedPerWeek * 52 * 100) / 100);
    setPrice(Math.round(price));
  };

  return (
    <div className={classes.calculator}>
      {/* This calculator is a form that takes in kms travelled in a day, number of days travelled in a week, fuel efficiency of the vehicle, and tells the user much money they could save and how much CO2 emmissions they could avoid with an EV. */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      >
        <div className={classes.formGroup}>
          <label htmlFor="kms" className={classes.label}>
            Kms travelled in a day
          </label>
          <input
            type="number"
            id="kms"
            name="kms"
            min="0"
            max="1000"
            required
            className={classes.input}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="days" className={classes.label}>
            Number of days travelled in a week
          </label>
          {/* drop down input of numbers up to 7  */}
          <select
            id="days"
            name="days"
            required
            className={classes.input}
            value={days}
            onChange={(e) => setDays(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="efficiency" className={classes.label}>
            Fuel efficiency of your vehicle (km/L)
          </label>
          <input
            type="number"
            id="efficiency"
            name="efficiency"
            min="0"
            max="100"
            required
            className={classes.input}
            value={fuelEfficiency}
            onChange={(e) => setFuelEfficiency(e.target.value)}
          />
        </div>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </form>
      {/* result */}
      <div className={classes.result}>
        <p className={classes.resultText}>
          You could save <div className={classes.price}>₹{price}</div>and avoid{" "}
          <div className={classes.carbon}>{carbon}kg</div> of CO2 emissions per
          year with an EV.
        </p>
      </div>
    </div>
  );
}
