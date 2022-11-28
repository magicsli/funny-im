import useUserId from '@/hooks/useUserId'
import Other from './Other'
import Self from './Self'

export interface ToolsetProps {
  item: IChat
}

const Toolset = ({ item }: ToolsetProps) => {
  const userId = useUserId()

  return userId === item.from ? <Self item={item} /> : <Other item={item} />
}

export default Toolset
