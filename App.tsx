/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={[
        {
          flexDirection: 'column',
        },
      ]}>
      <Text style={{textAlign: 'center', fontSize: 24}}>{'Hello Mahmoud'}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: 'oldlace',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: 6,
            minWidth: '48%',
          }}>
          <Text style={{textAlign: 'center'}}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: 'oldlace',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: 6,
            minWidth: '48%',
          }}>
          <Text style={{textAlign: 'center'}}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: 'oldlace',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: 6,
            minWidth: '48%',
          }}>
          <Text style={{textAlign: 'center'}}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: 'oldlace',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: 6,
            minWidth: '48%',
          }}>
          <Text style={{textAlign: 'center'}}>Hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
