import { FC, PropsWithChildren } from "react"

const DemoBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border p-4 rounded-xl">
      {children}
    </div>
  )
}

export default DemoBox