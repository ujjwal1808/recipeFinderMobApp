import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Footer from './Footer'

export class Saved extends Component {
  render() {
    return (
        <View style={{ flex: 1, marginTop: 60 }}>
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>saved</Text>
                </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <Footer data="save" />
      </View >
    )
  }
}

export default Saved
