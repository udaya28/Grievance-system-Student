import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Header from './../header/Header.component';
import './Home.styles.css';
const Home = () => {
  return (
    <Paper>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Header />
          <Box className="box">
            <Paper>
              <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptates minima ea error sunt nam fuga consectetur?
                Inventore, error totam velit ipsam quos omnis ullam a non est.
                Ducimus, eius!
              </Typography>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti impedit eaque fugit placeat, perferendis cumque veritatis, est blanditiis iusto ipsam nam porro! Numquam, ab autem neque ratione voluptatum assumenda?</p>
            </Paper>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nisi corporis qui ea! Impedit sequi autem voluptatibus iure debitis soluta iste, nemo quis similique aut velit veniam praesentium vitae expedita.</p>
          </Box>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Home;
