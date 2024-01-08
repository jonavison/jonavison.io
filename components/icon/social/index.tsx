import { FacebookIcon } from './Facebook'
import { GitHubIcon } from './GitHub'
import { TunedsphereIcon } from './Tunedsphere'

export type SocialIconName = 'facebook' | 'github' | 'tunedsphere'

export const socialIconMap = {
  facebook: FacebookIcon,
  github: GitHubIcon,
  tunedsphere: TunedsphereIcon,
}
