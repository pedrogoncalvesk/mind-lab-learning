const styles = theme => ({
    gridContainer: {
        padding: '0.5rem 1rem',
    },
    gridItem: {
        flex: 1,
        minWidth: '12rem',
    },
    horizontalGridItem: {},
    label: {
        left: '2rem',
    },
    labelSize: {
        fontSize: '13px',
    },
    noWrap: {
        whiteSpace: 'nowrap',
    },
    helperText: {
        opacity: 0,
        transition: `opacity ${theme.transitions.duration.shorter}ms ${
            theme.transitions.easing.easeOut
            } 0ms`,
    },
});

export default styles;
