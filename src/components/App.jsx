import React, { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NoAnswer } from './NoAnswer/NoAnswer';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / totalFeedback) * 100
  );

  const incrementValue = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.warn(`Error types in ${event}`);
    }
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={incrementValue} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NoAnswer message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// import React, { Component } from 'react';
// import { FeedbackOptions } from './Feedback/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { NoAnswer } from './NoAnswer/NoAnswer';
// import { Section } from './Section/Section';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = state => {
//     const feedbackValues = Object.values(state);
//     return feedbackValues.reduce((acc, el) => acc + el, 0);
//   };

//   countPositiveFeedbackPercentage = (good, total) => {
//     return Math.round((good / total) * 100);
//   };

//   incrementValue = event => {
//     this.setState(prevState => ({
//       [event.target.name]: prevState[event.target.name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback(this.state);
//     const response = this.countPositiveFeedbackPercentage(
//       this.state.good,
//       this.countTotalFeedback(this.state)
//     );
//     const positivePercentage = response ? response : 0;

//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.incrementValue}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <NoAnswer message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
