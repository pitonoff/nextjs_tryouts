
const TheFooter = () => {
    const styles = {
        footer: {
          background: '#f2f2f2',
          padding: '20px',
          marginTop: 'auto',
          alignItems: 'center',
          fontSize: '14px',
        },
      };

  return (
    <footer style={styles.footer}>
      created by &copy;Alexander Moshnitsky
    </footer>
  );
}

export {TheFooter};