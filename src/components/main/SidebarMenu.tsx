'use client'

import { useRouter } from 'next/navigation'
import { LayoutList, Palette } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarItem } from '@/components/main/SidebarItem'

const MENUS = [
  {
    title: 'Tasks Management',
    path: '/tasks-management',
    Icon: LayoutList,
  },
  {
    title: 'Palettes',
    path: '/palettes',
    Icon: Palette,
  },
]

export const SidebarMenu = () => {
  const router = useRouter()

  const handleClickSidebarItem = (path: string) => {
    router.push(path)
  }

  return (
    <ScrollArea className='flex-1 w-full'>
      <div className='space-y-5'>
        {MENUS.map((menu) => (
          <div key={menu.title} className='flex justify-center'>
            <SidebarItem
              title={menu.title}
              Icon={menu.Icon}
              onClick={() => handleClickSidebarItem(menu.path)}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
