import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { lighBlue, lightPurp, white } from '../utils/colors';
import TextButton from './TextButton';
import ViewPage from '@react-native-community/viewpager';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Quiz extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  };
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
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
  handleAnswer = (answer, page) => {
    answer === 'correct'
      ? this.setState((prevState) => ({
          correct: prevState.correct + 1,
        }))
      : this.setState((prevState) => ({
          incorrect: prevState.incorrect + 1,
        }));
    this.setState(
      (prevState) => ({
        answered: prevState.answered.map((p, i) => {
          if (page === i) {
            return 1;
          }
        }),
      }),
      () => {
        const { correct, incorrect, questionCount } = this.state;

        if (questionCount === correct + incorrect) {
          this.setState({
            screen: 'results',
          });
        } else {
          this.viewPager.setPage(page + 1);
          this.setState({
            screen: 'question',
          });
        }
      }
    );
  };

  handleReset = () =>
    this.setState({
      screen: 'question',
      correct: 0,
      incorrect: 0,
      answered: Array(this.props.questions.length).fill(0),
    });

  render() {
    const { questions, navigation } = this.props;
    const { screen, correct } = this.state;
    const result = ((correct / questions.length) * 100).toFixed(0);
    if (questions.length === 0) {
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
    }
    if (screen === 'results') {
      return (
        <Results
          navigation={navigation}
          reset={this.handleReset}
          result={result}
        />
      );
    }
    if (screen === 'question' || screen === 'answer') {
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
                  <Text style={styles.count}>
                    {index + 1} / {questions.length}
                  </Text>
                  <Text style={styles.title}>Question</Text>
                  <View style={styles.questionWrapper}>
                    <Text style={styles.questionText}>{question.question}</Text>
                  </View>
                  <TextButton onPress={this.showAnswerScreen}>
                    Show Answer
                  </TextButton>
                </View>
                <View>
                  <TextButton
                    onPress={() => this.handleAnswer('correct', index)}
                    disabled={this.state.answered[index] === 1}
                  >
                    Correct
                  </TextButton>
                  <TextButton
                    onPress={() => this.handleAnswer('incorrect', index)}
                    disabled={this.state.answered[index] === 1}
                  >
                    Incorrect
                  </TextButton>
                </View>
              </View>
            ) : (
              <View style={styles.pageStyle} key={index}>
                <View style={[styles.block, styles.questionContainer]}>
                  <Text style={styles.count}>
                    {index + 1} / {questions.length}
                  </Text>
                  <Text style={styles.title}>Answer</Text>
                  <View style={styles.questionWrapper}>
                    <Text style={styles.questionText}>{question.answer}</Text>
                  </View>
                  <TextButton onPress={this.showQuestionScreen}>
                    Show Question
                  </TextButton>
                </View>
                <View>
                  <TextButton
                    onPress={() => this.handleAnswer('correct', index)}
                    disabled={this.state.answered[index] === 1}
                  >
                    Correct
                  </TextButton>
                  <TextButton
                    onPress={() => this.handleAnswer('incorrect', index)}
                    disabled={this.state.answered[index] === 1}
                  >
                    Incorrect
                  </TextButton>
                </View>
              </View>
            );
          })}
        </ViewPage>
      );
    }
  }
}

const Results = (props) => {
  return (
    <View style={styles.pageStyle} key={1}>
      <View style={[styles.block, styles.questionContainer]}>
        <Text style={styles.title}>Results</Text>
        <View style={styles.questionWrapper}>
          <Text style={styles.ResultTextLarge}>Quiz Complete</Text>
          <Text style={styles.ResultTextSmall}>Here's how you did</Text>
          <Text style={styles.ResultTextXLarge}>{props.result}%</Text>
        </View>
      </View>
      <View>
        <TextButton onPress={props.reset}>Restart Quiz</TextButton>
        <TextButton onPress={() => props.navigation.goBack()}>
          Back to Deck
        </TextButton>
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
    backgroundColor: white,
    justifyContent: 'space-around',
  },
  block: {
    marginBottom: 20,
  },
  count: {
    fontSize: 24,
    color: lightPurp,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: white,
    fontWeight: 'bold',
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: lighBlue,
    backgroundColor: lighBlue,
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
    color: lightPurp,
  },
  ResultTextXLarge: {
    textAlign: 'center',
    fontSize: 100,
    color: lightPurp,
    fontWeight: 'bold',
  },
  ResultTextLarge: {
    textAlign: 'center',
    fontSize: 60,
    color: white,
  },
  ResultTextSmall: {
    textAlign: 'center',
    fontSize: 30,
    color: white,
  },
});

function mapStateToProps(state, { route }) {
  return {
    questions: state[route.params.id].questions,
  };
}

export default connect(mapStateToProps)(Quiz);
