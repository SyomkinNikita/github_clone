import GitHubStore from '../store/GitHubStore';

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = 'ktsstudio';

gitHubStore.getOrganizationReposList({
  organizationName: EXAMPLE_ORGANIZATION
}).then(result => {
  if (result.success) {
    console.log(result.data.map(item => item.name))
  } 
})

