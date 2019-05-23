const styles = theme => ({
    root: {
        margin: '3rem 0',
        padding: '0 1rem'
    },
    paper: {
        ...theme.mixins.gutters(),
    },
    button: {
        margin: theme.spacing.unit,
    },
    logo: {
        padding: `${theme.spacing.unit*2}px 0`,
        height: '100px',
    }
});

export default styles;
