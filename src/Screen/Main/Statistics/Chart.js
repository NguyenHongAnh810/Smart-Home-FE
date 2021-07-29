import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const Chart = ({name = '', dataT=[], dataH=[], dataP=[]}) => {
//   const [temperature, setTemperature] = useState([0, 0, 0, 0, 0, 0, 0]);
//   const [humid, setHumid] = useState([0, 0, 0, 0, 0, 0, 0]);
//   const [ppm, setPpm] = useState([0, 0, 0, 0, 0, 0, 0]);

//   const [tN, setTN] = useState([1, 2, 3, 4, 2, 6, 10]);
//   const [hN, setHN] = useState([1, 2, 3, 4, 1, 6, 7]);
//   const [pN, setPN] = useState([1, 2, 3, 4, 4, 6, 4]);

//   const [tD, setTD] = useState([1, 2, 3, 4, 3, 6, 9]);
//   const [hD, setHD] = useState([1, 2, 3, 4, 9, 6, 6]);
//   const [pD, setPD] = useState([1, 2, 3, 4, 2, 6, 3]);

//   const [tW, setTW] = useState([1, 0, 3, 4, 7, 6, 8]);
//   const [hW, setHW] = useState([1, 4, 3, 5, 5, 6, 5]);
//   const [pW, setPW] = useState([1, 7, 3, 9, 5, 6, 2]);

//   let responseJSON = `{
//     "success": true,
//     "id_room": 1,
//     "from-date": "2000-10-25 00:00:00",
//     "to-date": "2000-10-08 00:00:00",
//     "data": [
//         {
//             "humidity": 11.00,
//             "temperature": 20.00,
//             "ppm": 30.00
//         },
//         {
//             "humidity": 17.00,
//             "temperature": 26.00,
//             "ppm": 48.00
//         },
//         {
//             "humidity": 15.00,
//             "temperature": 29.00,
//             "ppm": 42.00
//         },
//         {
//             "humidity": 12.00,
//             "temperature": 32.00,
//             "ppm": 55.00
//         },
//         {
//             "humidity": 11.00,
//             "temperature": 20.00,
//             "ppm": 30.00
//         },
//         {
//             "humidity": 17.00,
//             "temperature": 26.00,
//             "ppm": 48.00
//         },
//         {
//             "humidity": 15.00,
//             "temperature": 29.00,
//             "ppm": 42.00
//         }
//     ]
// }`;

//   let responseJSON1 = `{
//   "success": true,
//   "id_room": 1,
//   "humidity": 12.00,
//   "temperature": 30.00,
//   "ppm": 44.00,
//   "date": "2000-10-08 00:00:00"
// }`;

//   useEffect(() => {
//     // fetch('http://192.168.1.11:3000/week')
//     //     .then(resp => resp.json())
//     //     .then((responseJSON) => {
//     let responseJson = JSON.parse(responseJSON);
//     let success = responseJson['success'];
//     if (success == true) {
//       let datas = responseJson['data'];
//       let arrayTemperature = datas.map(element => element.temperature);
//       let arrayHumidity = datas.map(element => element.humidity);
//       let arrayPpm = datas.map(element => element.ppm);
//       setTW(arrayTemperature);
//       setHW(arrayHumidity);
//       setPW(arrayPpm);
//     }
//     //   }
//     // )
//     // .catch((error) => {
//     //   console.error(error);
//     // });
//   }, []);

//   useEffect(() => {
//     // fetch('http://192.168.1.11:3000/day')
//     //     .then(resp => resp.json())
//     //     .then((responseJSON) => {
//     let responseJson = JSON.parse(responseJSON);
//     let success = responseJson['success'];
//     if (success == true) {
//       let datas = responseJson['data'];
//       let arrayTemperature = datas.map(element => element.temperature);
//       let arrayHumidity = datas.map(element => element.humidity);
//       let arrayPpm = datas.map(element => element.ppm);
//       setTD(arrayTemperature);
//       setHD(arrayHumidity);
//       setPD(arrayPpm);
//     }
//     //   }
//     // )
//     // .catch((error) => {
//     //   console.error(error);
//     // });
//   }, []);

//   const [arrayTemperature, setarrayTemperrature] = useState([]);
//   const [arrayHumidity, setarrayHumidity] = useState([]);
//   const [arrayPpm, setarrayPpm] = useState([]);

//   const [count, setcount] = useState(1);
//   setInterval(() => {
//     setcount(count + 1);
//   }, 3000);

//   // useEffect(() => {
//   //   // fetch('http://192.168.1.11:3000/now')
//   //   //     .then(resp => resp.json())
//   //   //     .then((responseJSON) => {
//   //   let responseJson = JSON.parse(responseJSON1);
//   //   let success = responseJson['success'];

//   //   if (success == true) {
//   //     let Temperature = responseJson['temperature'];
//   //     let Humidity = responseJson['humidity'];
//   //     let Ppm = responseJson['ppm'];
//   //     let itemT, itemH, itemP;
//   //     itemT = arrayTemperature;
//   //     itemH = arrayHumidity;
//   //     itemP = arrayPpm;
//   //     if (itemT.length <= 6) {
//   //       itemT.push(Temperature);
//   //       itemH.push(Humidity);
//   //       itemP.push(Ppm);
//   //     } else {
//   //       for (var i = 0; i < 6; i++) {
//   //         itemT[i] = itemT[i + 1];
//   //         itemH[i] = itemH[i + 1];
//   //         itemP[i] = itemP[i + 1];
//   //       }
//   //       itemT[6] = Temperature;
//   //       itemH[6] = Humidity;
//   //       itemP[6] = Ppm;
//   //     }
//   //     if (itemT.length == 7) {
//   //       setarrayTemperrature(itemT);
//   //       setarrayHumidity(itemH);
//   //       setarrayPpm(itemP);
//   //     }
//   //     setTN(arrayTemperature);
//   //     setHN(arrayHumidity);
//   //     setPN(arrayPpm);
//   //     //   }
//   //     // )
//   //     // .catch((error) => {
//   //     //   console.error(error);
//   //     // });
//   //   }
//   // }, [count]);

//   useEffect(() => {
//     console.log(selectedValue);
//     if (selectedValue == 'Now') {
//       setTemperature(tN);
//       setHumid(hN);
//       setPpm(pN);
//     } else {
//       if (selectedValue == 'Yesterday') {
//         setTemperature(tD);
//         setHumid(hD);
//         setPpm(pD);
//       } else {
//         if (selectedValue == 'last Week') {
//           setTemperature(tW);
//           setHumid(hW);
//           setPpm(pW);
//         }
//       }
//     }
//   }, [selectedValue]);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={{marginTop: 32}}>
        <LineChart
          bezier
          withHorizontalLabels={false}
          withVerticalLabels={false}
          data={{
            labels: [' jan', ' feb', ' mar', ' apr', ' june', ' july'],
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
