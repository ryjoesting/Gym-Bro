import { Text, Card } from 'react-native-ui-lib';

interface WorkoutCardProps {
    height: number | string,
    width: number | string,
    title: string,
}

export default function WorkoutCard(props: WorkoutCardProps) {
    const { height, width, title } = props;

    return (
        <Card center flex width={width} height={height} onPress={()=>{console.log('Pressed WorkoutCard')}}>
            <Text text60BO>{title}</Text>
        </Card>
    )
}