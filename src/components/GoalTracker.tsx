import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalState } from '../state/GlobalState';

const GoalTracker: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const [form, setForm] = useState({ title: '', targetAmount: '' });

  const addGoal = () => {
    if (form.title && form.targetAmount) {
      const newGoal = {
        id: uuidv4(),
        title: form.title,
        targetAmount: parseFloat(form.targetAmount),
        currentAmount: 0,
      };
      dispatch({ type: 'ADD_GOAL', payload: newGoal });
      setForm({ title: '', targetAmount: '' });
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5"  mb={2}>Goal Tracker</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Goal Title"
              fullWidth
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Target Amount"
              type="number"
              fullWidth
              value={form.targetAmount}
              onChange={(e) => setForm({ ...form, targetAmount: e.target.value })}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={addGoal} style={{ marginTop: '1rem' }}>
          Add Goal
        </Button>
        <List style={{ marginTop: '1rem' }}>
          {state.goals.map((goal) => (
            <ListItem key={goal.id}>
              <ListItemText
                primary={goal.title}
                secondary={`Target: $${goal.targetAmount.toFixed(2)}, Current: $${goal.currentAmount.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;
