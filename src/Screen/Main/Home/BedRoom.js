import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../assets/color';
const numColumns = 2;
const WIDTH = Dimensions.get('screen').width;
export default function LivingRoom() {
    const datas = [
        { key: '1', name: 'Air Conditioner' },
        { key: '2', name: 'Light Buld' },
        { key: '3', name: 'Air Purifier' },
    ];
    const [temperature, setTemperature] = useState(25.00);
    const [humid, setHumid] = useState(80.00);
    const [ppm, setPpm] = useState(40.00);
    const [time, setTime] = useState(0);
    const [isEnabledLight, setIsEnabledLight] = useState(false);
    const [isEnabledAir, setIsEnabledAir] = useState(false);
    const [isEnabledPurifier, setIsEnabledPurifier] = useState(false);
    const [autoLight, setAutoLight] = useState(true);
    const [autoAir, setAutoAir] = useState(true);
    const [autoPurifier, setAutoPurifier] = useState(true);
    const [changeAutoLight, setChangeAutoLight] = useState(false);
    const [changeAutoAir, setChangeAutoAir] = useState(false);
    const [changeAutoPurifier, setChangeAutoPurifier] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1)
        }, 3000);
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'http://localhost:3001/get-air-quality'
                });
                const res = response.data;
                if (res.success) {
                    setTemperature(res.temperature);
                    setHumid(res.humidity);
                    setPpm(res.ppm);
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    }, [time])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'http://localhost:3001/devices1'
                });
                const res = response.data;
                if (res.success && res.automatic) {
                    setAutoLight(res.automatic)
                    setIsEnabledLight(res['is-on-current'])
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices1',
                    data: {automatic: autoLight}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoLight(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    }, [changeAutoLight])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices1',
                    data: {'is-on-current': isEnabledLight}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoLight(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        if(!autoLight)
        {
            fetchData();
        }

    }, [isEnabledLight])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'http://localhost:3001/devices2'
                });
                const res = response.data;
                if (res.success && res.automatic) {
                    setAutoAir(res.automatic)
                    setIsEnabledAir(res['is-on-current'])
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices2',
                    data: {automatic: autoAir}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoAir(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    }, [changeAutoAir])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices2',
                    data: {'is-on-current': isEnabledAir}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoLight(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        if(!autoAir)
        {
            fetchData();
        }

    }, [isEnabledAir])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'GET',
                    url: 'http://localhost:3001/devices3'
                });
                const res = response.data;
                if (res.success && res.automatic) {
                    setAutoPurifier(res.automatic)
                    setIsEnabledPurifier(res['is-on-current'])
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices3',
                    data: {automatic: autoPurifier}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoPurifier(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        fetchData();
    }, [changeAutoPurifier])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'PATCH',
                    url: 'http://localhost:3001/devices3',
                    data: {'is-on-current': isEnabledPurifier}
                });
                const res = response.data;
                if (res.success) {
                    console.log(`res`, res)
                    setAutoLight(res.automatic)
                }
            } catch (error) {
                console.log('Failed to get data from server: ', error);
            }
        };
        if(!autoPurifier)
        {
            fetchData();
        }

    }, [isEnabledPurifier])
    const formatData = (datas, numColumns) => {
        const totalRows = Math.floor(datas.length / numColumns);
        let totalLastRow = datas.length - totalRows * numColumns;
        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            datas.push({ key: 'blank', empty: true });
            totalLastRow++;
        }
        return datas;
    };
    const renderItem = ({ item, index }) => {
        if (item.empty) {
            return (
                <View style={[styles.itemStyle, styles.itemInvisible]}></View>
            );
        }
        return (
            <View style={[styles.itemStyle, styles.shadow]}>
                <View style={{ alignItems: 'flex-start', margin: 16 }}>
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
                            style={[
                                styles.image,
                                { backgroundColor: Colors.blue_background },
                            ]}
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
                {item.name === 'Air Conditioner' ? (
                    <View style={{ alignItems: 'flex-start', margin: 16, flexDirection: 'row' }}>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.blue_main,
                            }}
                            thumbColor={
                                isEnabledAir ? Colors.blue_main : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                setIsEnabledAir(previousState => !previousState)}
                            value={isEnabledAir}
                        />
                        <Text style={{marginLeft: 16,color: Colors.white}}>Auto:</Text>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.purple,
                            }}
                            thumbColor={
                                autoAir ? Colors.purple : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                {setAutoAir(previousState => !previousState)
                                setChangeAutoAir(previousState => !previousState)}}
                            value={autoAir}
                        />
                    </View>
                ) : null}
                {item.name === 'Light Buld' ? (
                    <View style={{ alignItems: 'flex-start', margin: 16, flexDirection: 'row' }}>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.blue_main,
                            }}
                            thumbColor={
                                isEnabledLight ? Colors.blue_main : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setIsEnabledLight(previousState => !previousState)}
                            value={isEnabledLight}
                        />
                        <Text style={{marginLeft: 16,color: Colors.white}}>Auto:</Text>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.purple,
                            }}
                            thumbColor={
                                autoLight ? Colors.purple : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                {setAutoLight(previousState => !previousState)
                                setChangeAutoLight(previousState => !previousState)}}
                            value={autoLight}
                        />
                    </View>
                ) : null}
                {item.name === 'Air Purifier' ? (
                    <View style={{ alignItems: 'flex-start', margin: 16, flexDirection: 'row' }}>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.blue_main,
                            }}
                            thumbColor={
                                isEnabledPurifier ? Colors.blue_main : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                setIsEnabledPurifier(previousState => !previousState)}
                            value={isEnabledPurifier}
                        />
                        <Text style={{marginLeft: 16,color: Colors.white}}>Auto:</Text>
                        <Switch
                            trackColor={{
                                false: Colors.gray,
                                true: Colors.purple,
                            }}
                            thumbColor={
                                autoPurifier ? Colors.purple : '#f4f3f4'
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                {setAutoPurifier(previousState => !previousState)
                                setChangeAutoPurifier(previousState => !previousState)}}
                            value={autoPurifier}
                        />
                    </View>
                ) : null}

            </View>
        );
    };
    return (
        <View style={styles.container}>
            {/* <View style={{ borderRadius: 16, paddingBottom: 32, backgroundColor: Colors.blue_background }}> */}
            <View style={[styles.indexStyle, { marginTop: datas.length >= 3 ? 16 : 32 }]}>
                <View style={[styles.textView]}>
                    <Text style={styles.text}>Temperature</Text>
                </View>
                <FontAwesome
                    name="snowflake-o"
                    size={32}
                    color={Colors.blue_background}
                />
                <Text
                    style={{
                        color: Colors.blue_main,
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {'    '}
                    {temperature.toFixed(0)} °C
                </Text>
            </View>
            <View style={[styles.indexStyle, { marginTop: 32 }]}>
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
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {' '}
                    {humid.toFixed(2)}
                </Text>
            </View>
            <View style={[styles.indexStyle, { marginTop: 32 }]}>
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
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}>
                    {' '}
                    {ppm.toFixed(2)}
                </Text>
            </View>
            {/* </View> */}

            <SafeAreaView
                style={{
                    flex: 1,
                    width: WIDTH,
                    marginTop: datas.length >= 3 ? 60 : 240,
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
        // margin: 16,
        flex: 1,
        flexGrow: 1,
        //marginBottom: 100,
        alignItems: 'center',
        //backgroundColor: Colors.blue_background
    },
    indexStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 32,
        // marginRight: 16
    },
    image: {
        height: 40,
        width: 40,
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
        height: WIDTH / numColumns - 16,
    },
    textView: {
        marginHorizontal: 16
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
