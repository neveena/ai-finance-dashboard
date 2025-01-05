import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { GlobalStateProvider } from '../src/state/GlobalState';
import AIInsights from '../src/components/AIInsights';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ choices: [{ message: { content: 'Mocked financial insight'} }] }),
  })
) as jest.Mock;;


describe('AIInsights Component', () => {
  beforeEach(() => {
    process.env = {
      OPENAI_API_KEY: "test123",
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('renders the AI Insights component', () => {
    render(
      <GlobalStateProvider>
        <AIInsights />
      </GlobalStateProvider>
    );

    expect(screen.getByText('AI Insights')).toBeInTheDocument();
    expect(screen.getByText('Get Insights')).toBeInTheDocument();
  });

  it('fetches insights when button is clicked', async () => {
    render(
      <GlobalStateProvider>
        <AIInsights />
      </GlobalStateProvider>
    );

    fireEvent.click(screen.getByText('Get Insights'));

    await waitFor(() => expect(screen.getByText('Mocked financial insight')).toBeInTheDocument());
  });

  it('displays an error if the API call fails', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject(new Error('API Error')));

    render(
      <GlobalStateProvider>
        <AIInsights />
      </GlobalStateProvider>
    );

    fireEvent.click(screen.getByText('Get Insights'));

    await waitFor(() =>
      expect(screen.getByText('Error fetching insights')).toBeInTheDocument()
    );
  });
});
