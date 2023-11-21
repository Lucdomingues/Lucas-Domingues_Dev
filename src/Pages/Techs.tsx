import BackEnd from "../Components/BackEnd";
import BancoDeDados from "../Components/BancoDeDados";
import FrontEnd from "../Components/FrontEnd";
import Header from "../Components/Header";
import NavTech from "../Components/NavTech";
import Outros from "../Components/Outros";
import UpIcon from "../Components/UpIcon";


export default function Techs() {
  return (
    <div>
        <Header />
        <UpIcon />
        <NavTech />
        <FrontEnd />
        <BackEnd />
        <BancoDeDados />
        <Outros />
    </div>
  );
};
