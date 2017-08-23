const colors = {
  main: '#00bc77',
  mid: '#999',
  active: '#c3ff00',
  disabled: '#bbb',

  bold: 'linear-gradient(red, #F1808B)',
  relaxed: 'linear-gradient(#95D7F4, #31DDDC)',
  positive: 'linear-gradient(#E1CF66, #F3A24A)',
  inquisitive: 'linear-gradient(#639EFF, #6899FC)',
  loving: 'linear-gradient(#3ECBCB, #30A0AF)',
  grateful: 'linear-gradient(#6DBF7A, #50A344)',
  yourself: 'linear-gradient(#F1808B, #F1808B)',
  kind: 'linear-gradient(red, #F1808B)'
};

const modal = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    background: '#222',
    border: 0
  }
};

export { colors, modal };
