import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { gray, white } from '../utils/colors';
import TextButton from './TextButton';
import ViewPage from '@react-native-community/viewpager';
import Ionicons from '@expo/vector-icons/Ionicons';

class Quiz extends Component {
  state = {
    screen: 'question',
    correct: 0,
    incorrect: 0,
    questionCount: this.props.questions.length,
    answered: Array(this.props.questions.length).fill(0),
  };
  handlePageChange = (evt) => {
    this.setState({
      screen: 'question',
    });
  };
  showQuestionScreen = () =>
    this.setState({
      screen: 'question',
    });
  showAnswerScreen = () =>
    this.setState({
      screen: 'answer',
    });
  showResultScreen = () =>
    this.setState({
      screen: 'result',
    });
  render() {
    const { questions } = this.props;
    const { screen } = this.state;
    return (
      <ViewPage
        style={styles.container}
        scrollEnabled={true}
        onPageSelected={this.handlePageChange}
        ref={(viewPager) => {
          this.viewPager = viewPager;
        }}
      >
        {questions.map((question, index) => {
          return screen === 'question' ? (
            <View style={styles.pageStyle} key={index}>
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.title}>Question</Text>
                <View style={styles.questionWrapper}>
                  <Text style={styles.questionText}>{question.question}</Text>
                </View>
                <TextButton onPress={this.showAnswerScreen}>Answer</TextButton>
              </View>
              <View>
                <TextButton>Correct</TextButton>
                <TextButton>Incorrect</TextButton>
              </View>
            </View>
          ) : (
            <View style={styles.pageStyle} key={index}>
              <View style={[styles.block, styles.questionContainer]}>
                <Text style={styles.title}>Answer</Text>
                <View style={styles.questionWrapper}>
                  <Text style={styles.questionText}>{question.answer}</Text>
                </View>
                <TextButton onPress={this.showQuestionScreen}>
                  Question
                </TextButton>
              </View>
              <View>
                <TextButton>Correct</TextButton>
                <TextButton>Incorrect</TextButton>
              </View>
            </View>
          );
        })}
      </ViewPage>
    );
  }
}

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

function mapStateToProps(state, { route }) {
  return {
    questions: state[route.params.id].questions,
  };
}

export default connect(mapStateToProps)(Quiz);
