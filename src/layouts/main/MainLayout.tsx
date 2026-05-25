import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <footer style={{ textAlign: 'center', padding: '24px 16px 32px' }}>
        <a
          href="https://www.instagram.com/invite.me.link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'var(--color-taupe)',
            opacity: 0.5,
            textDecoration: 'none',
            borderBottom: '1px solid currentColor',
            paddingBottom: '1px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >
          DESIGNED BY INVITE.ME.LINK
        </a>
      </footer>
    </>
  )
}
