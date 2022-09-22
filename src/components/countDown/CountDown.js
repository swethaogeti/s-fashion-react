import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./countDown.css";
function CountDown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("February 15,2023,00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDownDate - now;

      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      let d = Math.floor(gap / day);
      let h = Math.floor((gap % day) / hour);
      let m = Math.floor((gap % hour) / minute);
      let s = Math.floor((gap % minute) / second);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(d);
        setTimerHours(h);
        setTimerMinutes(m);
        setTimerSeconds(s);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    const clearValue = interval.current;
    return () => {
      clearInterval(clearValue);
    };
  });
  return (
    <div className="deal-component">
      <h1 className="heading"> DEAL OF THE DAY</h1>
      <section className="deal" id="deal">
        <div className="row">
          <div className="content">
            <h1 className="title">Blockbuster deals this way!</h1>
            <h2>EXTRA 50% OFF* ON THE WILDEST CALALOGUE</h2>
            <div className="count-down">
              <div className="box">
                <h3 id="day">{timerDays}</h3>
                <span>Days</span>
              </div>
              <div className="box">
                <h3 id="hour">{timerHours}</h3>
                <span>Hours</span>
              </div>
              <div className="box">
                <h3 id="minute">{timerMinutes}</h3>
                <span>Minutes</span>
              </div>
              <div className="box">
                <h3 id="second">{timerSeconds}</h3>
                <span>Seconds</span>
              </div>
            </div>
            <Link to="/products" className="btn btn-primary">
              Buy Now
            </Link>
          </div>

          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGZhc2hpb24lMjBoYW5kYmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountDown;
