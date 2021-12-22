import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import { handleReceiveDecks } from '../actions';
import { gray, purple, white } from '../utils/colors';
import Deck from './Deck';
import DeckInfo from './DeckInfo';
import { setLocalNotification } from '../utils/helpers';

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
    setLocalNotification();
  }
  render() {
    const { decks, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mobile flash cards</Text>
        <ScrollView style={styles.container}>
          <View
            style={styles.separator}
            lightColor='#eee'
            darkColor='rgba(255,255,255,0.1)'
          />
          {Object.keys(decks).map((id) => {
            return <DeckInfo id={id} key={id} navigation={navigation} />;
          })}
        </ScrollView>
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

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(DeckList);
