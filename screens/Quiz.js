import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Quiz = ({navigation}) => {
  const [Questions, setQuestions] = useState();
  const [Ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getQuetion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  Questions api...
  const getQuetion = async () => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986',
      );
      const data = await response.json();
      setQuestions(data.results);
      // working
      // generateShuffleOption(data.results);
      // testing
      setOptions(generateShuffleOption(data.results[Ques]));
    } catch (err) {
      console.log(err);
    }
  };

  // shuffle the option...
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const generateShuffleOption = _options => {
    // working
    // let option = _options[Ques].incorrect_answers;
    // option.push(_options[Ques].correct_answer);
    // shuffleArray(option);
    // test
    let option = [..._options.incorrect_answers];
    option.push(_options.correct_answer);

    shuffleArray(option);
    return option;
  };

  // handleing events....

  // next button
  const handleNext = () => {
    setQues(prev => prev + 1);
    setOptions(generateShuffleOption(Questions[Ques + 1]));
  };

  // options
  const handleOption = _option => {
    if (_option === Questions[Ques].correct_answer) {
      setScore(prev => prev + 1);
    }
    if (Ques !== 9) {
      setQues(prev => prev + 1);
      setOptions(generateShuffleOption(Questions[Ques + 1]));
    } else {
      navigation.navigate('Result', {score: score});
    }
  };
  return (
    <View style={styles.container}>
      {Questions && (
        <View style={{height: '100%'}}>
          <View style={styles.header}>
            <Text style={styles.question}>{`Q${Ques + 1}. ${decodeURIComponent(
              Questions[Ques].question,
            )}`}</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => handleOption(options[0])}
              style={styles.optionBtn}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOption(options[1])}
              style={styles.optionBtn}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOption(options[2])}
              style={styles.optionBtn}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleOption(options[3])}
              style={styles.optionBtn}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            {Ques !== 9 && (
              <TouchableOpacity onPress={() => handleNext()} style={styles.btn}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            )}
            {Ques === 9 && (
              <TouchableOpacity
                onPress={() => navigation.navigate('Result', {score: score})}
                style={styles.btn}>
                <Text style={styles.btnText}>Show Result</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 16,
  },
  header: {
    marginVertical: 16,
  },
  question: {
    color: 'black',
    fontSize: 28,
  },
  optionBtn: {
    backgroundColor: '#00B4D8',
    marginVertical: 20,
    borderRadius: 10,
  },
  options: {
    flex: 1,
  },
  option: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#0077B6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 18,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
});
