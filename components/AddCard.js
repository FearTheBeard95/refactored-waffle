import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gray, lightPurp, white } from '../utils/colors';
import TextButton from './TextButton';
import { addCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
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
          <Text style={styles.title}>Add new card</Text>
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            placeholder='Question'
            placeholderTextColor={gray}
            onChangeText={this.onChangeQuestion}
          />
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            placeholder='Answer'
            placeholderTextColor={gray}
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
    color: lightPurp,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: lightPurp,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20,
    color: lightPurp,
  },
});

export default connect()(AddCard);
