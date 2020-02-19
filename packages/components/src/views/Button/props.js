import PropTypes from 'prop-types';

export const props =  {
    color: PropTypes.string,

    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderCornerRadius: PropTypes.number,

    text: PropTypes.string,
    textColor: PropTypes.string,
    textAlign: PropTypes.string,
    textFontSize: PropTypes.number,
    textFontWeight: PropTypes.string
}

export const defaultProps = {
    color: '#6e7f80',

    borderColor: '#536878',
    borderWidth: 4,
    borderCornerRadius: 8,

    text: '',
    textColor: '#36454f',
    textAlign: 'center',
    textFont: PropTypes.string,
    textFontSize: 14,
    textFontWeight: 'bold'
}