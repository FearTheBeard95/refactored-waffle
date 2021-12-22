import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {
  gray,
  green,
  lighBlue,
  lightPurp,
  purple,
  white,
} from '../utils/colors';

class DeckInfo extends Component {
  state = {
    bounceValue: new Animated.Value(1),
  };
  handleDeckClick = (id) => {
    const { bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, {
        duration: 100,
        toValue: 1.04,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start(() =>
      this.props.navigation.navigate('Deck', {
        id,
      })
    );
  };
  render() {
    const { deck, navigation } = this.props;
    const { bounceValue } = this.state;
    const disbaled = navigation === undefined ? true : false;
    if (deck === undefined) {
      return <View style={styles.deckContainer} />;
    }
    return (
      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <TouchableOpacity
          onPress={() => this.handleDeckClick(deck.title)}
          disabled={disbaled}
        >
          <View style={styles.deckContainer}>
            <View>
              <Text style={styles.deckText}>{deck.title}</Text>
            </View>
            <View>
              <Text style={styles.cardText}>
                {deck.questions.length} Flash card(s)
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
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
    borderColor: lighBlue,
    backgroundColor: lighBlue,
    borderRadius: 5,
    marginBottom: 10,
  },
  deckText: {
    fontSize: 28,
    color: white,
  },
  cardText: {
    fontSize: 18,
    color: lightPurp,
  },
});

function mapStateToProps(state, { id }) {
  return {
    deck: state[id],
  };
}

export default connect(mapStateToProps)(DeckInfo);
