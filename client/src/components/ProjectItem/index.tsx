import Card from "../Card";

interface IProps extends IComProps {
  name: string;
  emoji?: string;
}

function ProjectItem(props: IProps) {
  return (
    <Card className="text-[3rem] text-center py-[4rem] rounded-[1rem]" hover onClick={props.onClick}>
      <div className="text-[6rem] mb-[4rem]">{props.emoji ?? "⚒️"}</div>
      <div>{props.name}</div>
    </Card>
  );
}

export default ProjectItem;
