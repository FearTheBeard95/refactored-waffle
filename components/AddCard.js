import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { gray, purple, white } from '../utils/colors';
import TextButton from './TextButton';
import { addCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  onChangeQuestion = (question) =>
    this.setState({
      question,
    });
  onChangeAnswer = (answer) =>
    this.setState({
      answer,
    });

  submit = () => {
    const { dispatch, route, navigation } = this.props;
    const { answer, question } = this.state;
    console.log;
    dispatch(
      addCard(route.params.id, {
        question,
        answer,
      })
    );
    this.setState({
      question: '',
      answer: '',
    });
    return navigation.goBack();
  };
  render() {
    const { answer, question } = this.state;
    const disabled = answer === '' || question === '';
    return (
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            placeholder='Question'
            placeholderTextColor={purple}
            onChangeText={this.onChangeQuestion}
          />
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            placeholder='Answer'
            placeholderTextColor={purple}
            onChangeText={this.onChangeAnswer}
          />
        </View>
        <TextButton disabled={disabled} onPress={this.submit}>
          Submit
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: white,
    justifyContent: 'center',
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20,
  },
});

export default connect()(AddCard);
