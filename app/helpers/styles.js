import { StyleSheet, css } from 'aphrodite';

export const DefaultStyles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: '1',
    maxWidth: '1024px',
    margin: '0 auto',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  mainContent: {
    padding: '8px 10px',
    marginLeft:'-0.5%',
    marginRight:'-0.5%',
  },
  
  section: {
    flex: '1',
  },
  titleRow: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 12px',
  },
});
