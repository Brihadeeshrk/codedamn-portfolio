import { atom } from "recoil";

export interface Portfolio {
  open: boolean;
}

const defaultPortfolioState: Portfolio = {
  open: false,
};

export const createPortfolioState = atom<Portfolio>({
  key: "createPortfolioState",
  default: defaultPortfolioState,
});
