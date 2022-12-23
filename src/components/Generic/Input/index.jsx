import React from "react";
import { Container, Icon, Wrapper } from "./style";
import { forwardRef } from "react";

// export const Input = ({
//   type,
//   onChange,
//   value,
//   defaultValue,
//   placeholder,
//   name,
//   width,
//   height,
//   icon,
// }) => {
//   return (
//     <Wrapper>
//       <Icon>{icon}</Icon>
//       <Container
//         icon={Icon}
//         placeholder={placeholder}
//         name={name}
//         value={value}
//         defaultValue={defaultValue}
//         onChange={onChange}
//         type={type}
//         width={width}
//         height={height}
//       />
//     </Wrapper>
//   );
// };
export const Input = forwardRef(
  (
    {
      type,
      onChange,
      value,
      defaultValue,
      placeholder,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={Icon}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;
