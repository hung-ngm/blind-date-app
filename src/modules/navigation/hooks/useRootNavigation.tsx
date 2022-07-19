import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootScreenTabParamList } from '../../../types/navigation'

const useRootNavigation = () => {
    const navigation = useNavigation<NavigationProp<RootScreenTabParamList>>();
    return navigation;
}

export default useRootNavigation;