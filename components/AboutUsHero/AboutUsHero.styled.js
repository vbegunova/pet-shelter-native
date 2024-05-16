import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  section: {
    paddingTop: 135,
    paddingBottom: 36,
    overflow: 'hidden',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    width: 300,
  },
  title: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    color: '#250C46',
    letterSpacing: -0.3,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 45,
  },
  text: {
    fontFamily: 'Hagrid-Text-Trial-Medium',
    fontSize: 16,
    marginBottom: 48,
    color: '#250C46',
    lineHeight: 20,
    textAlign: 'center',
  },
  secondTitle: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    color: '#250C46', 
    letterSpacing: -0.3,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 37,
  },
  secondText: {
    fontFamily: 'Hagrid-Text-Trial-Medium',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 0,
    color: '#250C46', 
    lineHeight: 20,
    textAlign: 'center',
  },
});