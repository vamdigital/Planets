interface Props {
  label: string
  info?: string
}
export const Pills = ({ label, info }: Props) => {
  return (
    <div className="flex md:flex-col  px-6 py-2 md:py-6 md:px-4 border-[1px] border-slate-500 justify-between items-center md:items-start w-full">
      <span className=" flex text-slate-400 font-body pt-2 md:pt-0 md:text-sm uppercase">
        {label}
      </span>
      <span className=" flex text-white font-heading  uppercase md:text-[24px]">
        {info}
      </span>
    </div>
  )
}
