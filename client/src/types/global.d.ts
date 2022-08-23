/** 组件props */

interface IComProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
}

interface Window {
  ethereum: any;
}
