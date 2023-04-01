import React, { useContext} from 'react'
import classNames from 'classnames'
import { FiUser } from 'react-icons/fi'
import { MdGroups, MdAttachFile } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { FaChartArea, FaFileInvoiceDollar } from 'react-icons/fa'
import { BsCreditCardFill, BsFileEarmarkPpt, BsFiles, BsLockFill } from 'react-icons/bs'
import { AiOutlineReload, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaCommentDollar, FaFileContract } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import { ImTicket } from 'react-icons/im'
import { GrTasks } from 'react-icons/gr'
import { NavContext } from '../App'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {

  const isWide = React.useContext(NavContext)

  const check = () => {
    console.log(isWide)
  }

  return (
    <nav className={ classNames(' w-[80%] min-w-[300px] max-w-[350px] h-full flex flex-col gap-2 ', {' w-[50px] min-w-[50px]' : isWide})}>

      {/* Headrer */}
      <div className=' w-full min-h-[60px] pl-2 bg-white flex items-center '>
        <h1 className={ classNames( 'text-xl font-medium transition-all duration-300 ', { 'hidden' : isWide} ) } onClick={check} >holi Company</h1>
      </div>

      {/* Links */}
      <div className=' w-full h-full bg-white overflow-scroll' >
        <ul className=' flex flex-col  ' >
          <NavLink to='./profile' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <FiUser />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Profile</span>
          </NavLink>
     
          <NavLink  to='./group' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 '>
            <MdGroups /> 
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} )} >Group</span>
          </NavLink>
          <NavLink to='./Notes' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <CgNotes />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} )} >Notes</span>
          </NavLink>
          <NavLink to='./Statement' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <FaChartArea />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Statement</span>
          </NavLink>
          <NavLink to='./InvoicesInvoices' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <FaFileInvoiceDollar />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Invoices</span>
          </NavLink>
          <NavLink to='./Payments' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <BsCreditCardFill />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Payments</span>
          </NavLink>
          <NavLink to='./Proposals' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <BsFileEarmarkPpt />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Proposals</span>
          </NavLink>
          <NavLink to='./Credit-Notes' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <FaCommentDollar />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Credit Notes</span>
          </NavLink>
          <NavLink to='./Estiments' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <BsFiles />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Estiments</span>
          </NavLink>
          <NavLink to='./Subscriptions' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <AiOutlineReload />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Subscriptions</span>
          </NavLink>
          <NavLink to='./Expenses' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <BiDollar />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Expenses</span>
          </NavLink>
          <NavLink to='./Contracts' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <FaFileContract />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Contracts</span>
          </NavLink>
          <NavLink to='./Projects' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <AiOutlineFundProjectionScreen />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Projects</span>
          </NavLink>
          <NavLink to='./Tasks' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <GrTasks />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Tasks</span>
          </NavLink>
          <NavLink to='./Tickets' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <ImTicket />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Tickets</span>
          </NavLink>
          <NavLink to='./Files' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <MdAttachFile />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Files</span>
          </NavLink>
          <NavLink to='./Vault' className=' link flex items-center gap-3 pl-4 h-[50px] cursor-pointer border-b border-gray-200 hover:bg-sky-50 ' >
            <BsLockFill />
            <span className={ classNames( ' text-base transition-all duration-300 ease-in ', { 'hidden' : isWide} ) } >Vault</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar
