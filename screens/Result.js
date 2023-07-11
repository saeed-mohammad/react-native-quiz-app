import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation, route}) => {
  const params = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Result: {params.score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRfhOpKSQJnB0KktlEGclsj5ucfeu6iwGlFKKVky_Hayn6MUT6',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText} t>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginVertical: 26,
  },
  headerText: {
    fontSize: 36,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
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
  btn: {
    backgroundColor: '#0077B6',
    padding: 10,
    marginVertical: 20,
    borderRadius: 18,
  },
  btnText: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
  },
});
