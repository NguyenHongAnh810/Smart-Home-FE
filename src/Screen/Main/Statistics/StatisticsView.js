import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

export default function Statistics() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Living Room</Text>
                <View style={{marginTop: 32}}>
                <LineChart
                    bezier
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    data={{
                        labels: [' jan', ' feb', ' mar', ' apr', ' june', ' july'],
                        datasets: [

                            {
                                data: [10, -4, 6, -8, 80, 20],
                                strokeWidth: 2,
                                color: (opacity = 1) => `rgba(255,0,0,${opacity})`
                            },
                            {
                                data: [5, 8, 6, 9, 8, 2, -2],
                                strokeWidth: 2,
                                color: (opacity = 1) => `rgba(0,102,0, ${opacity})`,
                            },
                            {
								data: [2, 4, 6, 8, 8, 2, 10],
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
            <View style={styles.container}>
                <Text>Bed Room</Text>
                <View style={{marginTop: 32}}>
                <LineChart
                    bezier
                    withHorizontalLabels={false}
                    withVerticalLabels={false}
                    data={{
                        labels: [' jan', ' feb', ' mar', ' apr', ' june', ' july'],
                        datasets: [

                            {
                                data: [10, -4, 6, -8, 80, 20],
                                strokeWidth: 2,
                                color: (opacity = 1) => `rgba(255,0,0,${opacity})`
                            },
                            {
                                data: [5, 8, 6, 9, 8, 2, -2],
                                strokeWidth: 2,
                                color: (opacity = 1) => `rgba(0,102,0, ${opacity})`,
                            },
                            {
								data: [2, 4, 6, 8, 8, 2, 10],
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //margin: 16,
        flex: 1,
        flexGrow: 1,
        //marginBottom: 100,
        alignItems: 'center',
        //backgroundColor: Colors.blue_background
    },
})

// import React from 'react'
// import { View, Text } from 'react-native'

// export default function Statistics() {
//     return (
//         <View>
//             <Text>Statistics</Text>
//         </View>
//     )
// }

