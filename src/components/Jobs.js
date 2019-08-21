import React from 'react';
import { DATA } from './../constants';
import moment from 'moment';

const convertWageToPerHour = (wage) => `$${(parseInt(wage) / 100).toFixed(2)}/hour`;

const Jobs = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="clearfix">
          <img src="https://t3.ftcdn.net/jpg/00/87/76/92/500_F_87769238_JSrNbeVArZn6HalDVFxOHWZ7cGP7QqNa.jpg"
               alt="constructor-image" className="constructor-image"/>
          <ul className="job-details list m-l-12">
            <li className="bolder">{DATA.title}</li>
            <li className="muted-text">{DATA.company.name}</li>
            <li className="muted-text">{convertWageToPerHour(DATA.wagePerHourInCents)}</li>
            <li className="muted-text bolder">
              {moment(DATA.shifts[0].startDate).format('ddd, MMM D')} - {moment(DATA.shifts[DATA.shifts.length - 1].endDate).format('ddd, MMM D')}
            </li>
          </ul>
        </div>
        <div className="m-t-18">
          <b>If you take this job you are agreeing to work ALL DAYS.</b>
          <ul className="job-shifts muted-text list">
            {
              DATA.shifts.map(shift =>
                <li>{moment(shift.startDate).format('ddd, MMM D - hh:mm A')}</li>
              )
            }
          </ul>
        </div>
        <hr/>
        <div>
          <span className="muted-text">Location</span><br/>
          <a href={`https://maps.google.com/?q=${DATA.company.address}`}
             className="address"><b>{DATA.company.address}</b></a>
        </div>
        <hr/>
        <div>
          <span className="muted-text">Branch</span><br/>
          <span className="muted-text">{DATA.branch}</span><br/>
          <a href={`tel: ${DATA.branchPhoneNumber}`} className="address">({DATA.branchPhoneNumber}) 922-4240</a>
        </div>
        <hr/>
        <div className="clearfix full-width p-t-12 p-b-12">
          <a href="#" className="pull-left outlined-button">No Thanks</a>
          <a href="#" className="pull-right outlined-button">I'll talk it</a>
        </div>
      </div>
    </div>
  )
};

export default Jobs;
