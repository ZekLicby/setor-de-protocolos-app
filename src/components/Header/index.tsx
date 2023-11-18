import { ArrowIcon } from "@/icons/arrowIcon";
import {
  FilterByDepartament,
  FilterContainer,
  HeaderContainer,
  HeaderTitle,
  IconsContainer,
} from "./styles";
import { SearchIcon } from "@/icons/searchIcon";
import { UserIcon } from "@/icons/userIcon";

interface HeaderProps {
  hasFilter?: boolean;
}

export const Header = ({ hasFilter }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>DIRETORIA DE GESTÃO ESCOLAR</HeaderTitle>
      <FilterContainer>
        <FilterByDepartament>
          <p>Todos os departamentos</p>
          <ArrowIcon />
        </FilterByDepartament>
        <IconsContainer>
          <SearchIcon />
          <UserIcon />
        </IconsContainer>
      </FilterContainer>
    </HeaderContainer>
  );
};
