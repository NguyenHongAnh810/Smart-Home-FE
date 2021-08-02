import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Chart = ({name = '', dataT=[], dataH=[], dataP=[]}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={{marginTop: 32}}>
        <LineChart
          bezier
          withHorizontalLabels={false}
          withVerticalLabels={false}
          data={{
            labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6',  ' 3', ' 4', ' 5', ' 6' ],
            datasets: [
              {
                data: dataT,
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
              },
              {
                data: dataH,
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(0,102,0, ${opacity})`,
              },
              {
                data: dataP,
                strokeWidth: 2,
                color: (opacity = 1) => `rgba(0,0,102, ${opacity})`, // optional
              },
            ],
            legend: ['Temperature', 'Humid', 'PPM'],
          }}
          width={Dimensions.get('window').width - 16}
          height={200}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Chart;
