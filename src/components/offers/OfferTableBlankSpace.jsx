import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
    color: 'white'
  },
  description: {
    width: '60%',
    borderRightWidth: 1,
  },
  qty: {
    width: '10%',
    borderRightWidth: 1,
  },
  rate: {
    width: '15%',
    borderRightWidth: 1,
  },
  amount: {
    width: '15%',
  },
});

const OfferTableBlankSpace = ({ rowsCount }) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows && blankRows.length > 0 && blankRows.map((x, i) =>
    <View style={styles.row} key={`BR${i}`}>
      <Text style={styles.description}>-</Text>
      <Text style={styles.qty}>-</Text>
      <Text style={styles.rate}>-</Text>
      <Text style={styles.amount}>-</Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default OfferTableBlankSpace;