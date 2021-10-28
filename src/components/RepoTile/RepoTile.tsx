import React, { FC } from "react";

import { RepoItem } from "@store/GitHubStore/types";

type RepoTileProps = RepoItem & {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

export const RepoTile: FC<RepoTileProps> = (item) => {
  return <div>{item.name}</div>;
};
