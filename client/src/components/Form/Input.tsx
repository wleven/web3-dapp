interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Iprops) {
  return <input className={`bg-soft p-[2rem] text-[2rem] outline-none border-0 ${props.className}`} {...props} placeholder={props.placeholder || "请输入"} />;
}

export default Input;
