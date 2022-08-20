import { CSSProperties, useEffect, useState } from "react";

interface IProps {
  /** icon 大小 */
  size?: string;
  /** icon 颜色 */
  color?: string;
  /** font-awesome 图标名称 */
  className?: string;
}

function Icon(props: IProps) {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const size = props.size || "2rem";

    const css: CSSProperties = {
      fontSize: size,
      color: props.color,
    };

    setStyle(css);
  }, [props.size, props.color, props.className]);

  return <i className={`${props.className} inline-block`} style={style}></i>;
}

export default Icon;
