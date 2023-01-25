import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  companyColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  companyIcon: {
    color: 'gray',
    fontSize: 30,
  },
  companyNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  companyNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  companyRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  companyText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
})

const Company = ({ containerStyle, onPressCompany, bs, catchPhrase, company, index }) => (
  <TouchableOpacity onPress={() => onPressCompany(company)}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        {index === 0 && (
          <Icon
            bs="company"
            underlayColor="transparent"
            iconStyle={styles.companyIcon}
            onPress={() => onPressCompany()}
          />
        )}
      </View>
      <View style={styles.companyRow}>
        <View style={styles.companyColumn}>
          <Text style={styles.companyText}>{company}</Text>
        </View>
        <View style={styles.companyNameColumn}>
          {bs.length !== 0 && (
            <Text style={styles.companyNameText}>{bs}</Text>
          )}
        </View>
        <View style={styles.companyNameColumn}>
          {bs.length !== 0 && (
            <Text style={styles.companyNameText}>{catchPhrase}</Text>
          )}
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

Company.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  company: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  bs: PropTypes.string,
  catchPhrase: PropTypes.string,
  onPressCompany: PropTypes.func.isRequired,
}

Company.defaultProps = {
  containerStyle: {},
  bs: null,
}

export default Company
