import { Card, Grid } from '@material-ui/core';
import React from 'react';
import './Activity.css';

const sample = [
  {
    title: 'complaint about online class',
    timeStamp: "Fri Dec 04 2020 19:21:33 GMT+0530 (India Standard Time)",
    status: 'seen', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'complaint about online class',
    timeStamp: Date(),
    status: 'seen', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'complaint about online class',
    timeStamp: Date(),
    status: 'seen', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
  {
    title: 'complaint about online class',
    timeStamp: Date(),
    status: 'seen', //  "unseen" | "replayed",
    category: 'college', // "hostel"
    complaint:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis similique debitis distinctio nobis. Perferendis voluptate, obcaecati deleniti nostrum impedit doloribus quod soluta. Eos et corporis consequuntur id ipsa impedit?',
    response:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorum blanditiis odio, iste veniam, iusto nemo veritatis quas aliquam quibusdam accusantium! Aut hic earum distinctio nostrum autem cumque praesentium repellendus!',
  },
];

const getDate = (date) => {
  let arr = date.split(' ').slice(1, 5);

  let time = arr[3].split(":").map((str)=>parseInt(str))
  console.log(arr,time)
  return date.split(' ').slice(1, 5).join(' ');
};

const ActivityCard = ({ data }) => {
  const { title, timeStamp, status, complaint, response, category } = data;
  return (
    <Grid item xs={12} sm={6}>
      <Grid container className="activity-container">
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
