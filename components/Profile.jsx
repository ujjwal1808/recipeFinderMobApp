import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Footer from './Footer'

export class Profile extends Component {
  render() {
    return (
        <View style={{ flex: 1, marginTop: 60 }}>
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>profile</Text>
                </View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <Footer data="profile"/>
      </View >
    )
  }
}

export default Profile
