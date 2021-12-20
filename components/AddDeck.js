import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { gray, purple, white } from '../utils/colors';
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

  submit = () => {
    const { title } = this.state;
    const { navigation } = this.props;

    if (title !== '') {
      const { dispatch } = this.props;
      dispatch(addDeck(title));
      return navigation.goBack();
    }
  };
  render() {
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
            placeholderTextColor={purple}
            onChangeText={this.handleOnChange}
            value={this.state.title}
          />
        </View>
        <TextButton onPress={this.submit}>Submit</TextButton>
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

export default connect()(AddDeck);
