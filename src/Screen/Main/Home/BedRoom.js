import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../assets/color';
const numColumns = 2;
const WIDTH = Dimensions.get('screen').width;
export default function LivingRoom() {
  const datas = [
    {key: '1', name: 'Air Conditioner'},
    {key: '2', name: 'Light Buld'},
    {key: '3', name: 'Air Purifier'},
  ];

  const [isEnabledLight, setIsEnabledLight] = useState(false);
  const toggleSwitchLight = () =>
    setIsEnabledLight(previousState => !previousState);
  const [isEnabledAir, setIsEnabledAir] = useState(false);
  const toggleSwitchAir = () =>
    setIsEnabledAir(previousState => !previousState);
  const [isEnabledPurifier, setIsEnabledPurifier] = useState(false);
  const toggleSwitchPurifier = () =>
    setIsEnabledPurifier(previousState => !previousState);
  const formatData = (datas, numColumns) => {
    const totalRows = Math.floor(datas.length / numColumns);
    let totalLastRow = datas.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      datas.push({key: 'blank', empty: true});
      totalLastRow++;
    }
    return datas;
  };
  const renderItem = ({item, index}) => {
    if (item.empty) {
      return <View style={[styles.itemStyle, styles.itemInvisible]}></View>;
    }
    return (
      <View style={[styles.itemStyle, styles.shadow]}>
        <View style={{alignItems: 'flex-start', margin: 16}}>
          {item.name === 'Air Conditioner' ? (
            <Image
              style={styles.image}
              source={require('../../../assets/Image/air-conditioner.png')}
            />
          ) : null}
          {item.name === 'Light Buld' ? (
            <Image
              style={styles.image}
              source={require('../../../assets/Image/light.png')}
            />
          ) : null}
          {item.name === 'Air Purifier' ? (
            <Image
              style={[styles.image, {backgroundColor: Colors.blue_background}]}
              source={require('../../../assets/Image/air-purifier.png')}
            />
          ) : null}
        </View>
        <Text
          style={{
            fontSize: 14,
            color: Colors.white,
            fontWeight: 'bold',
            margin: 16,
          }}>
          {item.name}
        </Text>
        <View style={{alignItems: 'flex-start', margin: 16}}>
          {item.name === 'Air Conditioner' ? (
            <Switch
              trackColor={{
                false: Colors.gray,
                true: Colors.purple,
              }}
              thumbColor={isEnabledAir ? Colors.purple : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchAir}
              value={isEnabledAir}
            />
          ) : null}
          {item.name === 'Light Buld' ? (
            <Switch
              trackColor={{
                false: Colors.gray,
                true: Colors.purple,
              }}
              thumbColor={isEnabledLight ? Colors.purple : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchLight}
              value={isEnabledLight}
            />
          ) : null}
          {item.name === 'Air Purifier' ? (
            <Switch
              trackColor={{
                false: Colors.gray,
                true: Colors.purple,
              }}
              thumbColor={isEnabledPurifier ? Colors.purple : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchPurifier}
              value={isEnabledPurifier}
            />
          ) : null}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <View style={{ borderRadius: 16, paddingBottom: 32, backgroundColor: Colors.blue_background }}> */}
      <View
        style={[styles.indexStyle, {marginTop: datas.length >= 3 ? 16 : 32}]}>
        <View style={[styles.textView]}>
          <Text style={styles.text}>Temperature    </Text>
        </View>
        <FontAwesome
          name="snowflake-o"
          size={32}
          color={Colors.blue_background}
        />
        <Text
          style={{
            color: Colors.blue_main,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {'    '}
          26 °C
        </Text>
      </View>
      <View style={[styles.indexStyle, {marginTop: 8}]}>
        <View style={[styles.textView]}>
          <Text style={styles.text}>Humid{'         '}</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../../assets/Image/humid.png')}
        />
        <Text
          style={{
            color: Colors.blue_main,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          70.00
        </Text>
      </View>
      <View style={[styles.indexStyle, {marginTop: 8}]}>
        <View style={[styles.textView]}>
          <Text style={styles.text}>PPM{'            '}</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../../assets/Image/aqi.png')}
        />
        <Text
          style={{
            color: Colors.blue_main,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          45.00
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          width: 300,
          marginTop: 20,
          backgroundColor: '#FFF',
          alignItems: 'center',
          paddingLeft: 10,
          justifyContent: 'space-between',
          borderRadius: 10,
          backgroundColor: '#339966',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Automantic</Text>
        <Switch
          trackColor={{
            false: Colors.gray,
            true: Colors.purple,
          }}
          thumbColor={isEnabledPurifier ? Colors.purple : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchPurifier}
          value={isEnabledPurifier}
        />
      </View>

      <SafeAreaView
        style={{
          height: 300,
          width: (9 * WIDTH) / 10,
          marginTop: datas.length >= 3 ? 20 : 240,
        }}>
        <FlatList
          data={formatData(datas, numColumns)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    height: 100,
    alignItems: 'center',
  },
  indexStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    // backgroundColor: 'white',
    width: 300,
    borderRadius: 10
  },
  image: {
    height: 32,
    width: 32,
    alignItems: 'center',
    marginRight: 16,
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemStyle: {
    backgroundColor: Colors.blue_background,
    flex: 1,
    margin: 8,
    borderRadius: 16,
    justifyContent: 'center',
    height: WIDTH / numColumns - 28,
  },
  textView: {
    marginHorizontal: 16,
  },
  text: {
    color: Colors.blue_main,
    fontSize: 20,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
