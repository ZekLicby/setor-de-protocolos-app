import { ArrowIcon } from "@/icons/arrowIcon";
import {
  FilterByDepartament,
  FilterContainer,
  HeaderContainer,
  HeaderTitle,
  IconsContainer,
  ProtocolNumber,
} from "./styles";
import { SearchIcon } from "@/icons/searchIcon";
import { UserIcon } from "@/icons/userIcon";

interface HeaderProps {
  hasFilter?: boolean;
  headerTitle: string;
}

export const Header = ({ hasFilter = false, headerTitle }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{headerTitle}</HeaderTitle>
      {hasFilter ? (
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
      ) : (
        <ProtocolNumber>845942 - protocolo</ProtocolNumber>
      )}
    </HeaderContainer>
  );
};
