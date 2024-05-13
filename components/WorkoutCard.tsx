import { Text, Card } from 'react-native-ui-lib';

export default function WorkoutCard() {
    return (
        <Card center flex width={'80%'} height={250} onPress={()=>{console.log('Pressed WorkoutCard')}}>
            <Text text60BO>Workout Card</Text>
        </Card>
    )
}