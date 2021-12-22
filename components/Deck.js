import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { purple, red, white } from '../utils/colors';
import DeckInfo from './DeckInfo';
import TextButton from './TextButton';
import { deleteDeck } from '../actions';
import { removeDeck } from '../utils/api';

class Deck extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    navigation: PropTypes.object,
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.id !== undefined;
  }
  handleDelete = () => {
    const { id, dispatch, navigation } = this.props;
    removeDeck(id);
    dispatch(deleteDeck(id));
    navigation.goBack();
  };
  render() {
    const { id, navigation } = this.props;
    return (
      <View style={styles.container}>
        <DeckInfo id={id} />
        <View>
          <TextButton
            onPress={() =>
              navigation.navigate('AddCard', {
                id,
              })
            }
          >
            Add Card
          </TextButton>
          <TextButton
            onPress={() =>
              navigation.navigate('Quiz', {
                id,
              })
            }
          >
            Start a Quiz
          </TextButton>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={this.handleDelete}>
            <Ionicons
              size={30}
              style={{ marginBottom: -3 }}
              name={Platform.OS === 'ios' ? 'ios-trash-bin' : 'md-trash-bin'}
              color={red}
            />
          </TouchableOpacity>
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
  btnContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'blue',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 20,
  },
});

export default connect(mapStatetoProps)(Deck);
