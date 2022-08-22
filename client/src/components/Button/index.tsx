interface IProps extends IComProps {}

function Button(props: IProps) {
  return (
    <div className={`${props.className} font-bold inline-block bg-primary text-[1.6rem] px-[2rem] py-[1rem] rounded-[8px] leading-1 cursor-pointer hover:bg-primary-hover`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;
