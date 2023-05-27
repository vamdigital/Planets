import MenuIcon from '@planets/public/assets/icons/icon-hamburger.svg'

interface Props {
  clickHandler: () => void
  isOpen: boolean
}
export const MobileMenu = ({ clickHandler, isOpen }: Props) => {
  const fillColor = isOpen ? '#ffffff' : '#979797'
  return (
    <div className="flex items-center">
      <MenuIcon onClick={clickHandler} fill={fillColor} />
    </div>
  )
}
