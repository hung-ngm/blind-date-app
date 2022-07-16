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
    displayName: 'Kylie',
    age: 17,
    job: 'Model',
    photoURL: 'http://www.swaggermagazine.com/home/wp-content/uploads/2018/instagrammodels/13.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 2,
    displayName: 'Tiffany',
    age: 15,
    job: 'Model',
    photoURL: 'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-857-1620472406149.jpeg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 3,
    displayName: 'Michelle',
    age: 57,
    job: 'CEO',
    photoURL: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-doanh-nhan-trong-studio-chuyen-nghiep-nhat-ha-noi-gia-re-bao-nhieu-tien-media-07.jpg?v=1575710139260',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 4,
    displayName: 'Obama',
    age: 22,
    job: 'Businessman',
    photoURL: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-profile-cho-doanh-nhan-o-dau-dep-nhat-ha-noi-14.jpg?v=1572436589437',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 5,
    displayName: 'Minion',
    age: 5,
    job: 'Comedian',
    photoURL: 'http://images6.fanpop.com/image/photos/40600000/Minions-despicable-me-minions-40643681-3527-3028.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 6,
    displayName: 'Olaf',
    age: 20,
    job: 'Model',
    photoURL: 'http://images6.fanpop.com/image/photos/43000000/Olaf-frozen-43067041-600-600.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 7,
    displayName: 'Young Woo',
    age: 30,
    job: 'Attorney',
    photoURL: 'https://bizweb.dktcdn.net/100/254/857/files/cho-thue-mau-anh-nguoi-mau-nam-cho-thue-sieu-mau-cho-thue-nguoi-mau-nam.jpg?v=1557810920256',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  },
  {
    id: 8,
    displayName: 'Park Hang Seo',
    age: 60,
    job: 'Coach',
    photoURL: 'https://nld.mediacdn.vn/2019/12/30/8012053827827917117864338154987304088240128n-1577697734191574146572.jpg',
    promptStart: 'My simple pleasure is',
    promptEnd: 'buscus',
  }
]

export default Cards;