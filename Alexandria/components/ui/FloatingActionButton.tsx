import { Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


type FloatingActionButtonProps = {
    icon_name : keyof typeof Ionicons.glyphMap
}
export function FloatingActionButton({icon_name} : FloatingActionButtonProps){
    return (
        <Pressable style={{
            position: 'absolute',
            bottom: 30,
            right: 10
        }}>
        <Ionicons name={icon_name} size={45} color="white" />
        </Pressable>
    )
};

