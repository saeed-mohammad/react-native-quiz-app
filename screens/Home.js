import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ0qIiEfAvgEc9-mBCEnChtL-Gf2OIfaeMZ1GMn6W3UtadLRqQ',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={styles.quiz_btn}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.quiz_btnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 16,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    height: 300,
    width: 300,
  },
  quiz_btn: {
    backgroundColor: '#0077B6',
    padding: 15,
    marginVertical: 20,
    borderRadius: 18,
  },
  quiz_btnText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
  },
});
