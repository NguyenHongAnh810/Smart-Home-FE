import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Chart from './Chart';
import {Picker} from '@react-native-picker/picker';

const Statistics = props => {
  const [selectedValue, setSelectedValue] = useState('Now');

  const [temperature, setTemperature] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [humid, setHumid] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [ppm, setPpm] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [tN, setTN] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [hN, setHN] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [pN, setPN] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [tD, setTD] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [hD, setHD] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [pD, setPD] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const [tW, setTW] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [hW, setHW] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [pW, setPW] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    fetch('http://192.168.1.11:3000/api/1/get-get-air-quality')
      .then(resp => resp.json())
      .then(responseJSON => {
    let responseJson = JSON.parse(responseJSON);
    let success = responseJson['success'];
    if (success == true) {
      let datas = responseJson['data'];
      let arrayTemperature = datas.map(element => element.temperature);
      let arrayHumidity = datas.map(element => element.humidity);
      let arrayPpm = datas.map(element => element.ppm);
      setTW(arrayTemperature);
      setHW(arrayHumidity);
      setPW(arrayPpm);
    }else{
      console.log("data not available")
    }
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    fetch('http://192.168.1.11:3000/api/1/get-get-air-quality')
        .then(resp => resp.json())
        .then((responseJSON) => {
    let responseJson = JSON.parse(responseJSON);
    let success = responseJson['success'];
    if (success == true) {
      let datas = responseJson['data'];
      let arrayTemperature = datas.map(element => element.temperature);
      let arrayHumidity = datas.map(element => element.humidity);
      let arrayPpm = datas.map(element => element.ppm);
      setTD(arrayTemperature);
      setHD(arrayHumidity);
      setPD(arrayPpm);
    }else{
      console.log("data not available")
    }
      }
    )
    .catch((error) => {
      console.error(error);
    });
  }, []);

  const [arrayTemperature, setarrayTemperrature] = useState([]);
  const [arrayHumidity, setarrayHumidity] = useState([]);
  const [arrayPpm, setarrayPpm] = useState([]);

  const [count, setcount] = useState(1);

 

  useEffect(() => {
    setTimeout(() => {
      setcount(count+1)
    }, 3000);
    fetch('http://192.168.1.11:3000/api/1/get-air-quality')
        .then(resp => resp.json())
        .then((responseJSON) => {
    let responseJson = JSON.parse(responseJSON);
    let success = responseJson['success'];

    if (success == true) {
      let Temperature = responseJson['temperature'];
      let Humidity = responseJson['humidity'];
      let Ppm = responseJson['ppm'];
      let itemT, itemH, itemP;
      itemT = arrayTemperature;
      itemH = arrayHumidity;
      itemP = arrayPpm;
      if (itemT.length <= 9) {
        itemT.push(Temperature);
        itemH.push(Humidity);
        itemP.push(Ppm);
      } else {
        for (var i = 0; i < 9; i++) {
          itemT[i] = itemT[i + 1];
          itemH[i] = itemH[i + 1];
          itemP[i] = itemP[i + 1];
        }
        itemT[9] = Temperature;
        itemH[9] = Humidity;
        itemP[9] = Ppm;
      }
      setarrayTemperrature(itemT);
      setarrayHumidity(itemH);
      setarrayPpm(itemP);

      setTN(arrayTemperature);
      setHN(arrayHumidity);
      setPN(arrayPpm);
    }else{
      console.log("data not available")
    }
  }
      )
      .catch((error) => {
        console.error(error);
      });
  }, [count]);

  useEffect(() => {
    console.log(selectedValue);
    if (selectedValue == 'Now') {
      setTemperature(tN);
      setHumid(hN);
      setPpm(pN);
    } else {
      if (selectedValue == 'Yesterday') {
        setTemperature(tD);
        setHumid(hD);
        setPpm(pD);
      } else {
        if (selectedValue == 'last Week') {
          setTemperature(tW);
          setHumid(hW);
          setPpm(pW);
        }
      }
    }
  }, [selectedValue]);

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
          name="Living Room"
          dataT={temperature}
          dataH={humid}
          dataP={ppm}
          // selectedValue={selectedValue}
        />
        <Chart
          name="Bed Room"
          dataT={temperature}
          dataH={humid}
          dataP={ppm}
          // selectedValue={selectedValue}
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
