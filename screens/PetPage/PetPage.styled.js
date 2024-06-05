import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  section: {
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontWeight: '900',
    fontSize: 32,
    marginBottom: 45,
    letterSpacing: -0.3,
    color: '#250C46',
    textAlign: 'center',
  },
  imageBox: {
    marginBottom: 40,
    justifyContent: 'space-between',
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    marginBottom: 10,
    width: 300,
    height: 237,
    borderRadius: 31,
    backgroundColor: '#FFDFE5',
  },
  secondImage: {
    display: 'none',
    backgroundColor: '#FFDFE5',
  },
  styledButton: {
    width: 300,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE3FA0',
    borderRadius: 65,
    border: 'none',
  },
  styledButtonText: {
    fontFamily: 'Hagrid-Trial-Heavy',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 16,
    color: "#ffffff"
  },
  infoBox: {
    justifyContent: 'space-between',
  },
  subtitle: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontWeight: '800',
    fontSize: 32,
    marginBottom: 20,
    color: '#250C46', 
    textAlign: 'center',
  },
  infoList: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    marginBottom: 80,
  },
  infoItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoTitle: {
    fontFamily: 'eUkraine-Medium',
    fontWeight: '500',
    fontSize: 25,
    letterSpacing: -0.3,
    color: '#250C46',
  },
  infoDescription: {
    fontFamily: 'eUkraine-Medium',
    fontWeight: '500',
    fontSize: 11,
    letterSpacing: -0.6,
    color: '#2f2e41',
  },
  text: {
    fontFamily: 'eUkraine-Bold',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: -0.3,
    color: '#250C46',
    marginBottom: 29,
    textAlign: 'center',
  },
  behaviorBox: {
    width: '100%',
    padding: 30,
    textAlign: 'center',
    backgroundColor: '#AB7CE9',
    borderRadius: 25,
    marginBottom: 37,
  },
  behaviorTitle: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontWeight: '800',
    fontSize: 25,
    marginBottom: 16,
    letterSpacing: -0.3,
    color: '#FFF',
    textAlign: 'center',
  },
  behaviorText: {
    fontFamily: 'Hagrid-Text-Trial-Medium',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: -0.3,
    color: '#FFF',
    textAlign: 'center',
  },
  condTitle: {
    fontFamily: 'Hagrid-Trial-Extrabold',
    fontWeight: '800',
    fontSize: 25,
    marginBottom: 18,
    letterSpacing: -0.3,
    color: '#250C46', // Assuming globalColors.title is black
    textAlign: 'center',
  },
  condText: {
    fontFamily: 'Hagrid-Text-Trial-Medium',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: -0.3,
    color: '#2f2e41',
    marginBottom: 17,
    textAlign: 'center',
  },
  button: {
    marginBottom: 100,
    width: 237,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FE3FA0',
    borderRadius: 51,
    
    border: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Hagrid-Trial-Heavy',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  rightBox: {
    width: 350,
  },
});
