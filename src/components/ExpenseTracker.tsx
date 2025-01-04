import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Grid, List, ListItem, IconButton, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalState } from '../state/GlobalState';

const ExpenseTracker: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const [form, setForm] = useState({ description: '', amount: '', goalId: '' });

  const addExpense = () => {
    if (form.description && form.amount && form.goalId) {
      const newExpense = {
        id: uuidv4(),
        description: form.description,
        amount: parseFloat(form.amount),
        goalId: form.goalId,
      };
      dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
      setForm({ description: '', amount: '', goalId: '' });
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" mb={2}>Expense Tracker</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Description"
              fullWidth
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Amount"
              type="number"
              fullWidth
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Goal"
              select
              fullWidth
              value={form.goalId}
              onChange={(e) => setForm({ ...form, goalId: e.target.value })}
            >
              {state.goals.map((goal) => (
                <MenuItem key={goal.id} value={goal.id}>
                  {goal.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={addExpense} style={{ marginTop: '1rem' }}>
          Add Expense
        </Button>
        <List style={{ marginTop: '1rem' }}>
          {state.expenses.map((expense) => (
            <ListItem
              key={expense.id}
              secondaryAction={
                <IconButton onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: expense.id })}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              {expense.description} - ${expense.amount}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
