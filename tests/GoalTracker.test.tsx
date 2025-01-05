import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GlobalStateProvider } from '../src/state/GlobalState';
import GoalTracker from '../src/components/GoalTracker';

describe('GoalTracker Component', () => {
  it('renders the GoalTracker component', () => {
    render(
      <GlobalStateProvider>
        <GoalTracker />
      </GlobalStateProvider>
    );

    expect(screen.getByText('Goal Tracker')).toBeInTheDocument();
    expect(screen.getByText('Add Goal')).toBeInTheDocument();
  });

  it('adds a new goal when the form is submitted', () => {
    render(
      <GlobalStateProvider>
        <GoalTracker />
      </GlobalStateProvider>
    );

    fireEvent.change(screen.getByLabelText('Goal Title'), { target: { value: 'New Goal' } });
    fireEvent.change(screen.getByLabelText('Target Amount'), { target: { value: '500' } });
    fireEvent.click(screen.getByText('Add Goal'));

    expect(screen.getByText('New Goal')).toBeInTheDocument();
    expect(screen.getByText('Target: $500.00, Current: $0.00')).toBeInTheDocument();
  });
});
