import React from 'react';
import ScheduleBuilder from '../../lib/schedulebuilder';

export default class Schedule extends React.Component {
    // times: 9:45 am, 12:00 noon, 3:00 pm
    // days: Sun,Mon,Tue,Wed,Thu,Fri,Sat
    constructor(props) {
        super(props);
        this.state = {
            semester: "Fall 2026 Schedule",
            time: ["9:00 am","2:00 pm"], // time range for schedule
            day: ["Mon", "Fri"], // day range for schedule
            
            // days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            items: [
                {
                    name: "Net/App Security",
                    loc: "CH 210",
                    days: ["Mon", "Wed", "Fri"],
                    time: ["10:00 am", "10:50 am"],
                },
                {
                    name: "CS 1",
                    loc: "CH 276",
                    days: ["Mon","Wed", "Fri"],
                    time: ["11:00 am", "11:50 am"],
                },
                {
                    name: "OOP & Design Patterns",
                    loc: "CH 210",
                    days: ["Tue", "Thu"],
                    time: ["12:30 pm", "1:45 pm"],
                },
                {
                    name: "Office Hour",
                    loc: "CH 329",
                    days: ["Mon","Wed"],
                    time: ["1:00 pm", "1:50 pm"],
                },
                {
                    name: "Office Hour",
                    loc: "CH 329",
                    days: ["Tue","Thu"],
                    time: ["10:00 am", "11:15 am"],
                }
            ]
        };
    }

    render() {
        const builder = new ScheduleBuilder(this.state);
        return builder.render();
    }
}