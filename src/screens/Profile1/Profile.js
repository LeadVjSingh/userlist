import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import Email from './Email'
import Company from './Company'
import Separator from './Separator'
import Tel from './Tel'

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  userEmail: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },


})

class Contact extends Component {
  static propTypes = {
    // avatar: "https://i.imgur.com/rXVcgTZ.jpg",
    // avatarBackground: "https://i.imgur.com/rXVcgTZ.jpg",
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      geo: PropTypes.object.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    company: PropTypes.arrayOf(
      PropTypes.shape({
        bs: PropTypes.number.isRequired,
        catchPhrase: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,

    tels: PropTypes.arrayOf(
      PropTypes.shape({
        phone: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  onPressPlace = () => {
    console.log('place')
  }

  onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err))
  }

  onPressSms = () => {
    console.log('sms')
  }

  onPressEmail = email => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err)
    )
  }

  renderHeader = () => {
    const {
      // avatar,
      // avatarBackground,
      website,
      name,
      address: { city, geo, street, suite, zipcode },
    } = this.props

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{ uri: "https://i.imgur.com/rXVcgTZ.jpg" }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{ uri: "https://i.imgur.com/GfkNpVG.jpg" }}
            />
            <Text style={styles.userNameText}>{name}</Text>
            <Text style={styles.userEmail}>{website}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={this.onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {city}, {street}, {suite}
                </Text>
                <Text style={styles.userCityText}>
                  {zipcode}, {street}
                </Text>
              </View>

            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  renderTel = () =>
  (<View style={styles.container}><Tel
    key={`tel-${this.props.id}`}
    index={this.props.id}
    name={this.props.name}
    number={this.props.phone}
    onPressSms={this.onPressSms}
    onPressTel={this.onPressTel}
  /></View>
  )


  renderEmail = () => (
    <Email
      key={`email-${this.props.id}`}
      index={this.props.id}
      name={this.props.name}
      email={`email- ${this.props.email}`}
      onPressEmail={this.onPressEmail}
    />
  )

  renderCompany = () => (
    <Company
      key={`${this.props.id}`}
      index={this.props.id}
      bs={`bs - ${this.props.company.bs}`}
      catchPhrase={`catchPhrase - ${this.props.company.catchPhrase}`}
      company={`company - ${this.props.company.name}`}
      onPressEmail={this.onPressEmail}
    />
  )

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderHeader()}
            {Separator()}
            {Separator()}
            {Separator()}
            {this.renderTel()}
            {Separator()}
            {this.renderEmail()}
            {Separator()}
            {this.renderCompany()}
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default Contact
