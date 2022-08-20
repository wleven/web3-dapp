import AsideMenus from "./components/AsideMenus";
import ProjectItem from "./components/ProjectItem";

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center px-[30rem] select-none">
      <div>
        <h1 className="text-[10rem] mb-[4rem] linear-1">Web3.0 DAPP Demo</h1>
        <h2 className="text-[4rem] mb-[10rem] text-dark-2">
          ⚒️ React + Tailwind + Vite & Solidity + Hardhat
        </h2>
      </div>

      <div className="grid grid-cols-4 justify-center gap-[4rem]">
        <ProjectItem name="投票应用" emoji="🗒️"></ProjectItem>
        <ProjectItem name="待办应用" emoji="📝"></ProjectItem>
        <ProjectItem name="NFT应用" emoji="💵"></ProjectItem>
        <ProjectItem name="土地应用" emoji="🌱"></ProjectItem>
      </div>

      <AsideMenus />
    </div>
  );
}

export default App;
