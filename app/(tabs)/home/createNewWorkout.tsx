import { useState, useEffect } from 'react'
import { Pressable, ScrollView, StyleSheet} from 'react-native'
import { TouchableOpacity, Text, View, Colors, Card } from 'react-native-ui-lib'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function createNewWorkoutScreen() {
    const styles = StyleSheet.create({
            addButtonView: {
                height: 36,
                width: '100%',
                borderColor: Colors.primaryColor,
                borderWidth: 2,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12,
                marginBottom: 12,
            },
            container: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }
    })
    
    interface Exercise {
        name: string,
        sets: number,
        reps: Array<number>,
        weights: Array<number>,
    }
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const Exercises = () => {
        let i = 0;
        return (
            <>
                {
                exercises.map( (e) => {
                    i += 1;
                    return (
                        <Card key={i} centerH width={'100%'} height={200} borderRadius={30} marginB-8 marginT-8>
                            <Text body>{e.name}</Text>
                            <Text body>Sets: {e.sets}</Text>
                            <Text body>Reps: {e.reps.join(', ')}</Text>
                            <Text body>Weights: {e.reps.join(', ')}</Text>
                        </Card>
                    )
                })}   
            </>
        )
    }

    const AddButton = () => {
        const handleAddButtonPress = () => {
            // add blank exercise to the screen
             const newExercise = { name: 'New Exercise', sets: 3, reps: [10, 10, 10], weights: [50, 50, 50] };
            setExercises([...exercises, newExercise]);
        }
        
        return (
            <TouchableOpacity onPress={handleAddButtonPress}>
                <View style={styles.container}>
                    <View style={styles.addButtonView}>
                        <FontAwesome name='plus' color={Colors.primaryColor} />
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }

    return (
    <View style={styles.container}>
            <ScrollView style={{width: '100%'}}>
            <View style={{width: '80%'}}>
                <Exercises />
                <AddButton />
            </View>
        </ScrollView>
    </View>
        
)
}