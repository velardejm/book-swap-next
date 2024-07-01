const baseLabelClass = "input input-bordered flex items-center gap-2 mt-4 mb-4";

export const TextInput = ({
  name,
  placeholder,
  value,
  inputIcon,
  handleInput,
  autoFocus,
}) => {
  return (
    <label className={baseLabelClass}>
      {inputIcon && <InputIcon inputIcon={inputIcon} />}
      <input
        type="text"
        className="grow"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInput}
        autoFocus={autoFocus || false}
        required
      />
    </label>
  );
};

export const TextInputFocused = ({
  name,
  placeholder,
  value,
  inputIcon,
  handleInput,
}) => {
  return (
    <TextInput
      {...{ name, placeholder, value, handleInput, inputIcon }}
      autoFocus={true}
    />
  );
};

export const EmailInput = ({ value, handleInput, autoFocus }) => {
  return (
    <label className={baseLabelClass}>
      <img
        src="email-icon.svg"
        alt="Email Icon"
        className="w-4 h-4 opacity-70"
      />
      <input
        type="email"
        className="grow"
        name={"email"}
        placeholder={"E-mail"}
        value={value}
        onChange={handleInput}
        autoFocus={autoFocus || false}
        required
      />
    </label>
  );
};

export const EmailInputFocused = ({ value, handleInput }) => {
  return <EmailInput {...{ value, handleInput }} autoFocus={true} />;
};

export const PasswordInput = ({ value, handleInput, placeholder }) => {
  return (
    <label className={baseLabelClass}>
      <img
        src="password-icon.svg"
        alt="Password Icon"
        className="w-4 h-4 opacity-70"
      />
      <input
        type="password"
        className="grow"
        name="password"
        placeholder={placeholder || "Password"}
        value={value}
        onChange={handleInput}
        required
      />
    </label>
  );
};

export const PasswordInputVerification = ({ value, handleInput }) => {
  return (
    <PasswordInput
      {...{ value, handleInput }}
      placeholder={"Verify Password"}
    />
  );
};

function InputIcon({ inputIcon }) {
  const { src, alt } = inputIcon;
  return <img src={src} alt={alt} className="w-4 h-4 opacity-70" />;
}
