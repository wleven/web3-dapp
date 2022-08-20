interface IProps {
  name: string;
  emoji?:string;
  children?: React.ReactNode;
}

function ProjectItem(props: IProps) {
  return (
    <div className="text-[3rem] text-center py-[4rem] bg-soft rounded-[1rem] cursor-pointer hover:bg-mute">
      <div className="text-[6rem] mb-[4rem]">{props.emoji ?? '⚒️'}</div>
      <div>{props.name}</div>
    </div>
  );
}

export default ProjectItem;
