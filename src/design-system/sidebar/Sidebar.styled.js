import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 300px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 50px 20px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .user {
    display: flex;
    gap: 20px;
  }

  .icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.greyAccent};
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .links nav {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .links .MuiButtonBase-root {
    border-radius: 10px;
  }

  .links .MuiButtonBase-root p {
    margin: 0 10px;
  }

  .links .MuiButtonBase-root svg {
    font-size: ${(props) => props.theme.fontSizes.title};
  }
  .links .MuiButtonBase-root .plus-icon {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;
