import styled from '@emotion/styled';

export const Input = styled.input((props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingInline: '12px',
    paddingBlock: '8px',
    backgroundColor: props.variant == 'primary' ? '#0b0b09' : '#fff',
    color: props.variant == 'primary' ? '#fff' : '#0b0b09',
    whiteSpace: 'nowrap',
    border: '1px solid #e4e4e7',
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    fontSize: '14px',
    lineHeight: '24px',
    '&:focus': {
        outline: 'none',
    },
}));
