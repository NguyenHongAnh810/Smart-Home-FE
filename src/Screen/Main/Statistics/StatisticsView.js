import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Chart from './Chart';
import {Picker} from '@react-native-picker/picker';

const Statistics = props => {
  const [selectedValue, setSelectedValue] = useState('Now');

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{height: 50, width: 150}}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
            }}>
            <Picker.Item label="Now" value="Now" />
            <Picker.Item label="Yesterday" value="Yesterday" />
            <Picker.Item label="last Week" value="last Week" />
          </Picker>
        </View>
        <Chart
          id={1}
          name="Living Room"
          selectedValue={selectedValue}
        />
         <Chart
          id={2}
          name="Bed Room"
          selectedValue={selectedValue}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
});

export default Statistics;
