import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useGlobalState } from '../state/GlobalState';

const AIInsights: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const [loading, setLoading] = useState(false);
 
  const fetchInsight = async () => {
    setLoading(true);
    try {
      const apiKey = process.env.OPENAI_API_KEY;

      if (!apiKey) {
        throw new Error('OpenAI API key is missing in .env file');
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a financial assistant. Provide insights based on user expenses and goals.',
            },
            {
              role: 'user',
              content: `Here is the user's financial data: ${JSON.stringify(state)}`,
            },
          ],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data?.choices?.[0]?.message?.content) {
        dispatch({ type: 'SET_INSIGHT', payload: data.choices[0].message.content });
      } else {
        dispatch({ type: 'SET_INSIGHT', payload: 'Failed to fetch insights' });
      }
    } catch (error) {
      dispatch({ type: 'SET_INSIGHT', payload: 'Error fetching insights' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" mb={2}>AI Insights</Typography>
        <Button variant="contained" color="primary" onClick={fetchInsight} disabled={loading}>
          {loading ? 'Generating...' : 'Get Insights'}
        </Button>
        
        {state.insight && <Typography variant="body1" style={{ marginTop: '1rem' }}>{state.insight}</Typography>}
      </CardContent>
    </Card>
  );
};

export default AIInsights;
