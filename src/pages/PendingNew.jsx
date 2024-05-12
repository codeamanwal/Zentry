import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import Pending from './Pending'



export default function PendingNew() {
  const [sidebarOpen, setSidebar] = useState(false)
  return (
    <>
      <div>
      <Sidebar />
        <div className="lg:pl-72">
        <SearchBar />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Pending />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}


