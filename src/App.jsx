import React, { Component } from "react";
import { DateTime, Interval } from "luxon";

import "./App.css";
import * as posts from "./posts";
import headerImage from "./images/android-chrome-192x192.png";
import { Emoji } from "./components/Emoji";

function Header({ onBackClick, onHomeClick }) {
  return (
    <div className={"header"} style={{ display: "flex" }}>
      <div onClick={() => onBackClick()} style={{ flex: "1 0 44px" }}>
        {"<"}
      </div>
      <div onClick={() => onHomeClick()} style={{ flex: "1 0 auto" }}>
        <img src={headerImage} style={{ height: "1.5em" }} alt={"Ein Lynx"} />{" "}
        <span>MaahdH</span>
      </div>
      <div style={{ flex: "1 0 44px" }} />
    </div>
  );
}

const getComponentForDay = ({ dayOfMonth, month }) => {
  let postName = `Day_${month
    .toString()
    .padStart(2, "0")}_${dayOfMonth.toString().padStart(2, "0")}`;
  let TodaysPost = posts[postName];
  if (TodaysPost) {
    return <TodaysPost />;
  } else {
    return (
      <>
        <div>
          Trying to get post for {month}-{dayOfMonth} ({postName})
        </div>
        <div style={{ marginTop: "1em" }}>
          append{" "}
          <span style={{ textDecoration: "underline" }}>?day=10/17/2019</span>{" "}
          to your url and you'll get to the showroom
        </div>
      </>
    );
  }
};

/*
 * `?date=02/20/2019` will output content for February 20th
 * `/` is important as the most accepted seperator
 */
function Content({ dayOfMonth, month }) {
  return (
    <div className={"content"}>
      <div style={{ margin: "1em" }}>
        {getComponentForDay({ dayOfMonth, month })}
      </div>
    </div>
  );
}

function durationRemaining() {
  const christmas = DateTime.fromISO("2042-12-24T12:05:00+01:00");
  const remainingDuration = Interval.fromDateTimes(
    DateTime.local(),
    christmas
  ).toDuration(["days", "hours"]);
  console.log({ remainingDuration });
  let durationFormatted;
  if (remainingDuration.invalid) {
    durationFormatted = (
      <>
        <Emoji which={"🎉"} label={"party"} /> 0h
      </>
    );
  } else if (remainingDuration.toObject().days >= 1) {
    durationFormatted = remainingDuration.toFormat("dd't 'hh'h'");
  } else {
    durationFormatted = (
      <>
        <Emoji which={"🎉"} label={"party"} />{" "}
        {remainingDuration.toFormat("hh'h'")}
      </>
    );
  }
  return durationFormatted;
}

const locations = [
  {
    name: "Washington D.C.",
    timeZone: "utc-5"
  },
  {
    name: "Philadelphia",
    timeZone: "utc-5",
    state: "Pennsylvania"
  },
  {
    name: "New York",
    timeZone: "utc-5"
  },
  {
    name: "Henderson",
    timeZone: "utc-8",
    state: "Nevada"
  },
  {
    name: "Chicago",
    timeZone: "utc-6",
    state: "Illinois"
  },
  {
    name: "Zuhause",
    timeZone: "utc+1",
    state: "Sachsen-Anhalt"
  }
];

export class Footer extends React.Component {
  constructor() {
    super();
    this.currentLocation = locations[5];
    this.state = { currentTime: this.getCurrentTime() };
    setInterval(this.updateTime, 5000);
  }

  updateTime = () => {
    this.setState({
      currentTime: this.getCurrentTime()
    });
  };

  getCurrentTime = () => {
    return DateTime.local()
      .setZone(this.currentLocation.timeZone)
      .toFormat("HH':'mm");
  };

  render() {
    let durationFormatted = durationRemaining();
    let { currentTime } = this.state;

    return (
      <div className={"footer"}>
        <div style={{ flex: "1 1 auto", textAlign: "center" }}>
          {durationFormatted}
        </div>
        <div style={{ flex: "1 1 auto", textAlign: "center" }}>
          {this.currentLocation.name}{" "}
          {this.currentLocation.state ? (
            <div>
              <small>{this.currentLocation.state}</small>
            </div>
          ) : (
            ""
          )}
        </div>
        <div style={{ flex: "1 1 auto", textAlign: "center" }}>
          {currentTime}
        </div>
      </div>
    );
  }
}

export class App extends Component {
  constructor(props) {
    super(props);

    let urlParam = new URLSearchParams(window.location.search.slice(1)).get(
      "date"
    );
    let date;
    if (urlParam) {
      date = DateTime.fromJSDate(new Date(urlParam));
    } else {
      date = DateTime.local().setZone("utc+1");
    }
    this.state = { day: date.day, month: date.month };
  }

  handleBackClick = () => {
    let { day, month } = this.state;
    let oneDayBack = DateTime.local()
      .setZone("utc+1")
      .set({ day, month })
      .minus({ days: 1 });
    this.setState({ day: oneDayBack.day, month: oneDayBack.month });
  };

  handleHomeClick = () => {
    const todayForHer = DateTime.local().setZone("utc+1");
    this.setState({ day: todayForHer.day, month: todayForHer.month });
  };

  render() {
    const { day, month } = this.state;
    return (
      <div className={"app"}>
        <Header
          onBackClick={this.handleBackClick}
          onHomeClick={this.handleHomeClick}
        />
        <Content dayOfMonth={'17'} month={'10'} />
        <Footer />
      </div>
    );
  }
}
