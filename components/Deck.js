import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, purple, white } from '../utils/colors';
import DeckInfo from './DeckInfo';
import TextButton from './TextButton';

class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckInfo id={this.props.id} />
        <View>
          <TextButton
            onPress={() =>
              this.props.navigation.navigate('AddCard', {
                id: this.props.id,
              })
            }
          >
            Add Card
          </TextButton>
          <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>
            Start
          </TextButton>
        </View>
      </View>
    );
  }
}

function mapStatetoProps(state, { route }) {
  const id = route.params.id;
  return {
    id,
  };
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
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: purple,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default connect(mapStatetoProps)(Deck);
