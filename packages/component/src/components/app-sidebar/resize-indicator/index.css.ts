import { style } from '@vanilla-extract/css';

export const resizerContainer = style({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: '10px',
  height: '100%',
  zIndex: 'calc(var(--affine-z-index-modal) + 1)',
  transform: 'translateX(50%)',
  backgroundColor: 'transparent',
  opacity: 0,
  cursor: 'col-resize',
  '@media': {
    '(max-width: 600px)': {
      // do not allow resizing on mobile
      display: 'none',
    },
  },
  transition: 'opacity 0.15s ease 0.1s',
  selectors: {
    '&:hover': {
      opacity: 1,
    },
    '&[data-resizing="true"]': {
      transition: 'width .3s, min-width .3s, max-width .3s',
    },
    '&[data-open="false"]': {
      display: 'none',
    },
    '&[data-open="open"]': {
      display: 'block',
    },
  },
});

export const resizerInner = style({
  position: 'absolute',
  height: '100%',
  width: '2px',
  left: '3px',
  backgroundColor: 'var(--affine-border-color)',
  selectors: {
    [`${resizerContainer}:hover &`]: {},
  },
});
