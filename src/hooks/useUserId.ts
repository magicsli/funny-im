import { RootState } from "@/redux"
import { useSelector } from "react-redux"

const useUserId = () => {

  return useSelector<RootState>(state => state.user.user_id)
}

export default useUserId