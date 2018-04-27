import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import events from '../mockdata/EventData'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

export default class EventCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = date;
    }
    render() {
        return (
            <div className="calendar">
                <BigCalendar
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={this.state.date}
                />
            </div>
        );
    }
}