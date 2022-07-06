import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { mainTheme } from '../../themes/mainTheme'
import NavigationButtons from './components/NavigationButtons'
import PrimaryButton from '../../common/PrimaryButton'
import PassionList from './components/PassionList'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../types/navigation'

enum Passions {
  Photography = 1,
  Shopping,
  Karaoke,
  Yoga,
  Cooking,
  Tennis,
  Run,
  Swimming,
  Art,
  Traveling,
  Extreme,
  Music,
  Drink,
  Video_games,
}

export type Passion = {
  iconName: string;
  name: string;
  type: Passions;
}

export type SelectedObjectType = {
  [key in Passions]?: boolean;
}

type PassionScreenNavigationProps = NativeStackScreenProps<
  AppStackParamList,
  'Passion'
>
const PassionScreen = ({ navigation }: PassionScreenNavigationProps) => {
  const handleContinuePress = () => {
    navigation.navigate('IdealPlace');
  }
  const dummyList: Passion[] = [
    {
        iconName: 'camera',
        name: 'Photography',
        type: Passions.Photography,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'microphone',
        name: 'Karaoke',
        type: Passions.Karaoke,
    },
    {
        iconName: 'heart',
        name: 'Yoga',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },

    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
    {
        iconName: 'shopping-cart',
        name: 'Shopping',
        type: Passions.Shopping,
    },
  ]

  const [selectedTypes, setSelectedTypes] = useState<SelectedObjectType>({});
  const [numSelected, setNumSelected] = useState(0);
  const isContinueButtonDisabled = numSelected === 0;

  const selectType = (type: Passions) => {
    if (type in selectedTypes) {
      setSelectedTypes((pState) => {
          delete pState[type];
          return {...pState};
      })
      setNumSelected((pNum) => pNum - 1)
    }
    else {
        setSelectedTypes((pState) => {
            return {
                ...pState,
                [type]: true,
            }
        })
        setNumSelected((pNum) => pNum + 1)
    }
  }
  return (
        <View style={styles.container}>
            <View style={{
                ...styles.item,
                flex: 1
            }}>
                <NavigationButtons leftComponent={<Text>Back</Text>} />
            </View>
            <View style={{
                ...styles.item,
                flex: 1,
                ...styles.titleContainer
            }}
            >
                <Text style={styles.title}>Your passions</Text>
                  <Text style={styles.description}>
                    Select a few of your interests and let everyone know what you're passionate about.
                  </Text>
            </View>
            <View style={{
                ...styles.item,
                flex: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 5,
            }}>
                <View style={{
                    flex: 3,
                }}>
                    <PassionList
                      passionList={dummyList}
                      selectedTypes={selectedTypes}
                      selectType={selectType}
                    />
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                }}>
                    <PrimaryButton
                      text='Continue'
                      onPress={handleContinuePress}
                      extraTouchableHighlightProps={{
                        disabled: isContinueButtonDisabled
                      }}
                      extraStyles={isContinueButtonDisabled ? {
                        opacity: '0.5'
                      } : {}}
                    />
                </View>
            </View>
        </View>
  )
}

export default PassionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  item: {
    padding: 10,
  },
  titleContainer: {
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 34,
    padding: 5,
  },
  description: {
    fontSize: 18,
    padding: 5,
  },
  buttonSelected: {
      backgroundColor: mainTheme.PRIMARY_COLOR,
  },
  buttonDefault: {
      backgroundColor: mainTheme.WHITE_COLOR,
  },
  textSelected: {
      color: mainTheme.WHITE_COLOR,
  },
  textDefault: {
      color: mainTheme.DARK_COLOR,
  }
})