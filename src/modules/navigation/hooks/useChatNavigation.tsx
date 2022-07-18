import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ChatStackParamList } from '../../../types/navigation'

const useChatNavigation = () => {
    const navigation = useNavigation<NavigationProp<ChatStackParamList>>();
    return navigation;
}

export default useChatNavigation;