export default function GithubPreview() {
  type arrGitType = {
      nome: string,
      description: string,
      tech?: string[],
      url: string,
    }[];

  const arrGit:arrGitType = [
    {
      nome: '',
      description: '',
      url: ''
    },
    {
      nome: '',
      description: '',
      url: ''
    },
    {
      nome: '',
      description: '',
      url: ''
    }
  ];

  return (
    <div className="container md:container">
      <div className="flex flex-col">

      </div>
    </div>
  )
}
