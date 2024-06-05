import { Tag } from '../../types/tag'

export type Props = {
  onChange: (item: string) => void
  active: string
  list: Tag[]
}