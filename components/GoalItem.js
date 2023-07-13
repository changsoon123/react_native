import { StyleSheet, Text } from "react-native"

const GoalItem = (props) => {
  return <Text style={styles.goalItem}>{props.text}</Text>
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
})
