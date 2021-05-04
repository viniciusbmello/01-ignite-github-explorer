import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: "unform" ,
  description: "Forms in ReactJS",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}