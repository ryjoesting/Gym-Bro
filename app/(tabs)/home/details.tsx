import { View, Text } from 'react-native-ui-lib';
import { Button } from 'react-native-ui-lib/src/components/button';
import { checkAuthAndCreateWorkoutSplitDay } from './../../../firebase'
import { Pressable } from 'react-native';
export default function DetailsScreen() {
    return (
        <View>
            <Pressable onPress={() => checkAuthAndCreateWorkoutSplitDay({title: 'Legs'})}><Text>Details screen</Text></Pressable>
        </View>
    )
}