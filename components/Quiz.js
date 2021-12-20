import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, white } from '../utils/colors';
import TextButton from './TextButton';

class Quiz extends Component {
  render() {
    return <QuizInfo question='Can react be used on iOS' />;
  }
}

const QuizInfo = (props) => {
  const { question, answer } = props;

  if (question != null) {
    return (
      <View style={styles.pageStyle} key={1}>
        <View style={[styles.block, styles.questionContainer]}>
          <Text style={styles.title}>Question</Text>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionText}>{question}</Text>
          </View>
          <TextButton>Question</TextButton>
        </View>
        <View>
          <TextButton>Correct</TextButton>
          <TextButton>Incorrect</TextButton>
        </View>
      </View>
    );
  }

  if (answer != null) {
    return (
      <View style={styles.pageStyle} key={1}>
        <View style={[styles.block, styles.questionContainer]}>
          <Text style={styles.title}>Answer</Text>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionText}>Yes</Text>
          </View>
          <TextButton>Answer</TextButton>
        </View>
        <View>
          <TextButton>Correct</TextButton>
          <TextButton>Incorrect</TextButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.pageStyle}>
      <View style={styles.block}>
        <Text style={[styles.count, { textAlign: 'center' }]}>
          You cannot take a quiz because there are no cards in the deck.
        </Text>
        <Text style={[styles.count, { textAlign: 'center' }]}>
          Please add some cards and try again.
        </Text>
      </View>
    </View>
  );
};

const Results = (props) => {
  return (
    <View style={styles.pageStyle} key={1}>
      <View style={[styles.block, styles.questionContainer]}>
        <Text style={styles.title}>Results</Text>
        <View style={styles.questionWrapper}>
          <Text style={styles.ResultTextLarge}>Quiz Done</Text>
          <Text style={styles.ResultTextSmall}>Here's how you did</Text>
          <Text style={styles.ResultTextXLarge}>100%</Text>
        </View>
      </View>
      <View>
        <TextButton>Restart Quiz</TextButton>
        <TextButton>Back to Deck</TextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageStyle: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: gray,
    justifyContent: 'space-around',
  },
  block: {
    marginBottom: 20,
  },
  count: {
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    flexGrow: 1,
  },
  questionWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    textAlign: 'center',
    fontSize: 20,
  },
  ResultTextXLarge: {
    textAlign: 'center',
    fontSize: 100,
  },
  ResultTextLarge: {
    textAlign: 'center',
    fontSize: 60,
  },
  ResultTextSmall: {
    textAlign: 'center',
    fontSize: 30,
  },
  resultTextGood: {
    color: gray,
    fontSize: 46,
    textAlign: 'center',
  },
  resultTextBad: {
    color: gray,
    fontSize: 46,
    textAlign: 'center',
  },
});

export default Quiz;
