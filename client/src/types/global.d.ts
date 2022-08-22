/** 组件props */

interface IComProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

interface Window {
  ethereum: any;
}
