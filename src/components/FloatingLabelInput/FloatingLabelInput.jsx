import React from 'react';
import { styled } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';

const StyledInput = styled('input')({
  border: 'none',
  minWidth: 0,
  outline: 0,
  padding: 0,
  paddingTop: '1em',
  flex: 1,
  color: 'grey',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus ~ label': {
    color: 'var(--Input-focusedHighlight)',
  },
  '&:-webkit-autofill': {
    alignSelf: 'stretch',
  },
  '&:-webkit-autofill:not(* + &)': {
    marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
    paddingInlineStart: 'var(--Input-paddingInline)',
    borderTopLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    borderBottomLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Input-minHeight) - 1em) / 2)',
  color: theme.vars.palette.text.tertiary,
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
  const id = React.useId();
  const { placeholder, type } = props;
  return (
    <React.Fragment>
      <StyledInput {...props} ref={ref} id={id} type={type} />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
    </React.Fragment>
  );
});

export default function FloatingLabelInput({ inputs, selectOptions }) {
  return (
    <div style={{ margin: '80px' }}>
      {inputs.map((input, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {input.type === 'select' ? ( // Check if input type is 'select'
            <select>
              {selectOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <Input
              endDecorator={<CheckCircleOutlined />}
              slots={{ input: InnerInput }}
              slotProps={{ input }}
              sx={{
                '--Input-minHeight': '60px',
                '--Input-radius': '10px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
