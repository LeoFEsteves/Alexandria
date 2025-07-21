import { Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { RoutePaths } from '@/app/routes';

type FloatingActionButtonProps = {
    icon_name : keyof typeof Ionicons.glyphMap,
    link : RoutePaths
};

export function FloatingActionButton({icon_name, link} : FloatingActionButtonProps){
    const router = useRouter();

    return (
        <Pressable style={{
            position: 'absolute',
            bottom: 30,
            right: 10
        }}
    onPress={() => router.push(link)}>
        <Ionicons name={icon_name} size={45} color="white" />
        </Pressable>
    )
};

