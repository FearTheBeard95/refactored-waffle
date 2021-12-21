import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, purple, white } from '../utils/colors';

class DeckInfo extends Component {
  render() {
    const { deck } = this.props;
    if (deck === undefined) {
      return <View style={styles.deckContainer} />;
    }
    return (
      <View style={styles.deckContainer}>
        <View>
          <Text style={styles.deckText}>{deck.title}</Text>
        </View>
        <View>
          <Text style={styles.cardText}>{deck.questions.length}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 120,
    minHeight: 120,
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    marginBottom: 10,
  },
  deckText: {
    fontSize: 28,
    color: purple,
  },
  cardText: {
    fontSize: 18,
    color: gray,
  },
});

function mapStateToProps(state, { id }) {
  return {
    deck: state[id],
  };
}

export default connect(mapStateToProps)(DeckInfo);
