import { Grid } from '@material-ui/core';
import React from 'react';
import './Activity.css';

const sample = [
  {
    title: 'Complaint about online class',
    timeStamp: "Fri Dec 04 2020 19:21:33 GMT+0530 (India Standard Time)",
    status: 'unseen', //  "unseen" | "replayed",
    category: 'hostel', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'Need information about Bus transport',
    timeStamp: "Fri Dec 04 2020 20:09:31 GMT+0530 (India Standard Time)",
    status: 'unseen', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'Complaint about hostel food',
    timeStamp: "Fri Dec 04 2020 22:45:31 GMT+0530 (India Standard Time)",
    status: 'seen', //  "unseen" | "replayed",
    category: 'hostel', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'About online exam portal',
    timeStamp: "Fri Dec 04 2020 02:45:31 GMT+0530 (India Standard Time)",
    status: 'replayed', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
];

const getDate = (date) => {
  let arr = date.split(' ').slice(1, 5);
  let timeArr = arr[3].split(":").map((str)=>parseInt(str))
  let AMPMstr = "AM";
  let hour = timeArr[0] 
  let min = timeArr[1]
  let day = arr.slice(0,3)
  let dayStr = day.join(" ")
  if(timeArr[0] >= 12){
    AMPMstr = "PM";
    hour %=12;
  }
  let time = `${hour>9?hour : "0"+hour }:${min>9?min:"0"+min} ${AMPMstr}`
  return `${dayStr +" "+ time}`;
};

const ActivityCard = ({ data }) => {
  const { title, timeStamp, status, complaint, response, category } = data;
  let statusClass ;
  if(status === "seen"){
      statusClass = "yellow"
  }else if(status === "unseen"){
      statusClass = "red"
  }else if(status === "replayed"){
      statusClass = "green"
  }else{
    statusClass = ""
  }
  return (
    <Grid item xs={12} sm={6}>
      <Grid container className={`activity-container + ${statusClass}`}>
        <Grid item>
          <h1 className="activity-title">{title}</h1>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <p className="time-stamp">{getDate(timeStamp)}</p>
          </Grid>
          <Grid item xs={6}>
            <p className="activity-status">{status}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Activity = () => {
  return (
    <div>
      <h1 className="activity-head">Previous Activity</h1>
      <Grid container spacing={1} style={{ padding: '10px 5px 30px 5px' }}>
        {sample.map((data,index) => (
          <ActivityCard data={data} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Activity;
