import { View, Text } from 'react-native'
import React from 'react'

const Instruction = ({ meal }) => {
    console.log(meal)

    // const formattedInstructions = meal.replace(/\r\n/g, "\n\n").split("\n").filter(step => step.trim() !== ""); 

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Instructions:
      </Text>

      <Text>
        {meal}
      </Text>
    </View>
    )
}

export default Instruction