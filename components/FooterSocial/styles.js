export default function (theme) {
  return {
    wrapper: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },

    item: {
      marginRight: `${theme.spacing(2)}px`,

      '&:last-of-type': {
        marginRight: 0,
      },
    },
  };
}
