import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gray, lightPurp, white } from '../utils/colors';
import TextButton from './TextButton';
import { addDeck } from '../actions';

class AddDeck extends Component {
  state = {
    title: '',
  };

  handleOnChange = (title) => {
    this.setState({
      title,
    });
  };

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  submit = () => {
    const { title } = this.state;
    const { navigation, dispatch } = this.props;

    if (title !== '') {
      dispatch(addDeck(title));
      this.setState({
        title: '',
      });
      return navigation.goBack();
    }
  };
  render() {
    const { title } = this.state;
    const disabled = title === '';
    return (
      <View style={styles.container}>
        <View style={{ height: 60 }} />
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.input}
            placeholder='Title'
            placeholderTextColor={gray}
            onChangeText={this.handleOnChange}
            value={title}
          />
        </View>
        <TextButton disabled={disabled} onPress={this.submit}>
          Create Deck
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
    justifyContent: 'center',
    backgroundColor: white,
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

export default connect()(AddDeck);
