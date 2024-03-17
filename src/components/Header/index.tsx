import { Button } from '../Button'
import { Logo } from '../Logo'

export const Header: React.FC = () => {
  return (
    <header className="w-full top-0 z-[1] bg-white fixed border-b-gray-50 border-b shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-center sm:justify-between items-center">
          <Logo width={201} height={38} />
          <Button title="Entre em contato" className="hidden sm:block" />
        </div>
      </div>
    </header>
  )
}
