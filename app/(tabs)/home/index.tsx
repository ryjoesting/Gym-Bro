import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { Card, Colors, Text, TouchableOpacity } from 'react-native-ui-lib';
import { Pressable } from 'react-native';
import { getUserDoc } from './../../../firebase'
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface WorkoutCardProps {
    height: number | string,
    width: number | string,
    title: string,
}

function WorkoutCard(props: WorkoutCardProps) {
    const { height, width, title} = props;

    const cardBorderRadius = 20;

    return (
        <Link href={'home/details'} asChild>
          <Card center flex width={width} height={height} borderRadius={cardBorderRadius} marginB-8 marginT-8>
              <Pressable onPress={getUserDoc}><Text text60BO>{title}</Text></Pressable>
          </Card>
        </Link>
          
    )
}


const HomeTab = () => {

  const arr = [1,2,3];

  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
          {arr.map( (val) => {
            return (<WorkoutCard height={250} width={'85%'} title={'WorkoutCard' + val} key={val} />)
          })}
        </ScrollView>

    {/* Hovering button that creates new workouts! */}
    <Link href={'home/createNewWorkout'} asChild>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          width: 60,
          height: 60,
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: Colors.primaryColor,
          borderRadius: 100,
          elevation: 5,
          justifyContent: 'center',
        }}
        onPress={() => {
          console.log('create button pressed on home page')
        }}
      >
        
          <FontAwesome size={18} name="plus" color="white" />        
      </TouchableOpacity>
    </Link>
    </GestureHandlerRootView>
  )
}
export default HomeTab;