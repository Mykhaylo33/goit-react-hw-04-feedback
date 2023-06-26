import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (name) => {
    if (name === 'good') {
      setGood((prevGood) => prevGood + 1);
    } else if (name === 'neutral') {
      setNeutral((prevNeutral) => prevNeutral + 1);
    } else if (name === 'bad') {
      setBad((prevBad) => prevBad + 1);
    }
  };

  const totalFeedback = good + neutral + bad;
  const hasFeedback = totalFeedback > 0;
  const positivePercentage = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleButtonClick} />
      </Section>

      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
