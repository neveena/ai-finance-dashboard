import React from 'react';
import { Grid, Container, Typography, AppBar, Toolbar } from '@mui/material';
import ExpenseTracker from './ExpenseTracker';
import GoalTracker from './GoalTracker';
import Chart from './Chart';
import AIInsights from './AIInsights';

const Dashboard: React.FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AI Personal Finance Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '6rem' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ExpenseTracker />
          </Grid>
          <Grid item xs={12} md={6}>
            <GoalTracker />
          </Grid>
          <Grid item xs={12}>
            <Chart />
          </Grid>
          <Grid item xs={12}>
            <AIInsights />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
