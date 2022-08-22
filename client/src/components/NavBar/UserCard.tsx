import { ImportToken } from "@/hooks/useEthers";
import Button from "../Button";
import Card from "../Card";

interface IProps {
  Address: string;
  ETH: string;
  PHB: string;
  show?: boolean;
}

function getAddress(address: string) {
  if (!address) return "0x0";
  const len = 10;
  return `${address.substring(0, len)}....${address.substring(address.length - len)}`;
}

function UserCard(props: IProps) {
  return (
    <Card className={`absolute top-[8rem] right-0 p-[2rem] leading-1 w-[40rem] rounded-[8px] user-card`}>
      <div className="text-[1.6rem] font-bold select-text">
        <div className="mb-[1rem]">Address：{getAddress(props.Address)}</div>
        <div className="mb-[1rem]">ETH：{props.ETH}</div>
        <div>PHB：{props.PHB}</div>
      </div>
    </Card>
  );
}

export default UserCard;
