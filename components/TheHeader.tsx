import Link from 'next/link';

const TheHeader = () => {
    const styles = {
        header: {
          background: '#f2f2f2',
          padding: '20px',
          marginBottom: '20px',
        },
        nav: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        navList: {
          listStyleType: 'none',
          display: 'flex',
          gap: '10px',
        },
        navItem: {
          marginRight: '10px',
        },
        navLink: {
          color: '#333',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'background 0.3s ease',
        },
      };

    return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/blog" style={styles.navLink}>Blog</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/about" style={styles.navLink}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export {TheHeader};