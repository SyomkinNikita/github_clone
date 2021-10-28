import React, { ChangeEvent } from "react";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { RepoTile } from "@components/RepoTile";
import SearchIcon from "@components/SearchIcon/SearchIcon";
import GitHubStore from "@store/GitHubStore";
import { RepoItem } from "@store/GitHubStore/types";

export const MainPage = () => {
  const [value, setValue] = React.useState<string>("");
  const [repoList, setRepoList] = React.useState<RepoItem[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const gitHubStore = new GitHubStore();

  React.useEffect(() => {
    gitHubStore
      .getOrganizationReposList({ organizationName: value })
      .then((response) => (response.success ? response.data : []))
      .then((response) => setRepoList(response));
  }, [value]);

  // eslint-disable-next-line no-console
  console.log(repoList);
  return (
    <>
      <Input value={value} placeholder={"test"} onChange={handleChange} />
      <Button>
        <SearchIcon />
      </Button>
      {repoList.map((item) => (
        <RepoTile {...item} />
      ))}
    </>
  );
};
