import React, { FC, useEffect, useState } from 'react'

import ReactDOM from 'react-dom'
import classNames from 'classnames'

type Props = {
  open: boolean
  onClose?: () => void
  onWrapperClick?: () => void
  children: React.ReactNode
  wrapperClassName?: string
  backdropClassName?: string
  wrapperStyles?: React.CSSProperties
  fadeTimeoutMs?: number
  disableBackdropClick?: boolean
}

const Modal: FC<Props> = ({
  open,
  onClose,
  // onWrapperClick,
  children,
  backdropClassName,
  wrapperClassName,
  wrapperStyles,
  fadeTimeoutMs = 250,
  disableBackdropClick = false,
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleBackdropClick = () => {
    if (onClose) {
      setIsActive(false)
      setTimeout(onClose, fadeTimeoutMs)
    }
  }

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && onClose) {
      setIsActive(false)
      setTimeout(onClose, fadeTimeoutMs)
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => setIsActive(true), 10) // Slight delay to trigger animation
    } else {
      document.body.style.overflow = ''
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  return ReactDOM.createPortal(
    <div
      className={classNames(
        'fixed inset-0 z-[105] flex items-center justify-center transition-all',
        `duration-${fadeTimeoutMs}`,
        {
          'opacity-0': !isActive,
          'opacity-100': isActive,
        },
        backdropClassName,
      )}
      onClick={disableBackdropClick ? undefined : handleBackdropClick}
    >
      <div
        className={classNames(wrapperClassName, { 'fade-in': isActive }, 'relative transition-all')}
        onClick={(e) => e.stopPropagation()}
        style={{
          ...wrapperStyles,
          animationDuration: `${fadeTimeoutMs}ms`,
        }}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
