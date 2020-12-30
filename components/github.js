import GitHubIcon from "../public/github-icon.svg"
import GitHubLogo from "../public/github-logo.svg"

const GitHub = () => (
  <div className="flex">
    <GitHubIcon />
    <span className="px-1 py-1 font-semibold">SignUp with</span>
    <GitHubLogo className="mx-1" />
  </div>
)

export default GitHub