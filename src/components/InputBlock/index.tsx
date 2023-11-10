import { InputBlockProps } from "@/types/inputTypes";
import {
  Icon,
  Input,
  InputAndIconContainer,
  InputBlockContainer,
  PasswordInput,
  PasswordInputAndIcon,
} from "./styles";
import { ClosedEyeIcon } from "@/icons/closedEyeIcon";

export const InputBlock = ({
  type,
  isChecked,
  isDisabled,
  isReadonly,
  isRequired,
  min,
  max,
  maxLength,
  minLength,
  pattern,
  placeholder,
  value,
  externalIcon,
  width = 300,
  height,
  backgroundColor,
  padding,
  fontSize,
  fontColor,
  placeholderColor,
  border,
  borderRadius,
}: InputBlockProps) => {
  return (
    <InputBlockContainer>
      <InputAndIconContainer>
        <Icon>{externalIcon}</Icon>
        {type === "password" ? (
          <PasswordInputAndIcon width={width}>
            <PasswordInput
              type={type || "text"}
              checked={isChecked}
              disabled={isDisabled}
              readOnly={isReadonly}
              required={isRequired}
              min={min}
              max={max}
              minLength={minLength}
              maxLength={maxLength}
              pattern={pattern}
              placeholder={placeholder}
              value={value}
              height={height}
              backgroundColor={backgroundColor}
              padding={padding}
              fontSize={fontSize}
              fontColor={fontColor}
              placeholderColor={placeholderColor}
              border={border}
              borderRadius={borderRadius}
            />
            <Icon>
              <ClosedEyeIcon />
            </Icon>
          </PasswordInputAndIcon>
        ) : (
          <Input
            type={type || "text"}
            checked={isChecked}
            disabled={isDisabled}
            readOnly={isReadonly}
            required={isRequired}
            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            value={value}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            padding={padding}
            fontSize={fontSize}
            fontColor={fontColor}
            placeholderColor={placeholderColor}
            border={border}
            borderRadius={borderRadius}
          />
        )}
      </InputAndIconContainer>
    </InputBlockContainer>
  );
};
