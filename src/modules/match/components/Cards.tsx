import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <View style = {styles.container}>
      <FlatList 
        numColumns={2}
        data={mockData}
        renderItem={({item}) => (
          <Card card={item}></Card>
        )}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mockData = [
  {
    id: 1,
    firstName: 'Kylie',
    age: 17,
    job: 'Model',
    photoUrl: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 2,
    firstName: 'Tiffany',
    age: 15,
    job: 'Model',
    photoUrl: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-857-1620472406149.jpeg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 3,
    firstName: 'Michelle',
    age: 57,
    job: 'CEO',
    photoUrl: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-doanh-nhan-trong-studio-chuyen-nghiep-nhat-ha-noi-gia-re-bao-nhieu-tien-media-07.jpg?v=1575710139260',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 4,
    firstName: 'Obama',
    age: 22,
    job: 'Businessman',
    photoUrl: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-profile-cho-doanh-nhan-o-dau-dep-nhat-ha-noi-14.jpg?v=1572436589437',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 5,
    firstName: 'Minion',
    age: 5,
    job: 'Comedian',
    photoUrl: 'http://images6.fanpop.com/image/photos/40600000/Minions-despicable-me-minions-40643681-3527-3028.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 6,
    firstName: 'Olaf',
    age: 20,
    job: 'Model',
    photoUrl: 'http://images6.fanpop.com/image/photos/43000000/Olaf-frozen-43067041-600-600.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 7,
    firstName: 'Young Woo',
    age: 30,
    job: 'Attorney',
    photoUrl: 'https://bizweb.dktcdn.net/100/254/857/files/cho-thue-mau-anh-nguoi-mau-nam-cho-thue-sieu-mau-cho-thue-nguoi-mau-nam.jpg?v=1557810920256',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  },
  {
    id: 8,
    firstName: 'Park Hang Seo',
    age: 60,
    job: 'Coach',
    photoUrl: 'https://nld.mediacdn.vn/2019/12/30/8012053827827917117864338154987304088240128n-1577697734191574146572.jpg',
    prompt: 'My simple pleasure is',
    promptAnswer: 'buscus',
  }
]

export default Cards;