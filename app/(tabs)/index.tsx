import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Card } from 'react-native-ui-lib';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  WorkoutCard from '../../components/WorkoutCard'

const HomeTab = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
          <WorkoutCard height={250} width={'85%'} title='WorkoutCard1' />
          <WorkoutCard height={250} width={'85%'} title='WorkoutCard2' />
          <WorkoutCard height={250} width={'85%'} title='WorkoutCard3' />
        </ScrollView>
    </GestureHandlerRootView>
  )
}
export default HomeTab;