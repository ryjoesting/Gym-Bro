import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { Card, Text } from 'react-native-ui-lib';

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
              <Text text60BO>{title}</Text>
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
    </GestureHandlerRootView>
  )
}
export default HomeTab;