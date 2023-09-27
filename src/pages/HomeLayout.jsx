import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'
import Loading from '../components/Loading'
import { useNavigation } from 'react-router-dom'

function HomeLayout() {
   const navigation = useNavigation()
   const isPageLoading = navigation.state === "loading"
   return (
      <>
         <Header />
         <Navbar />
         <main className='align-elements'>
            {isPageLoading
               ? <Loading />
               : <Outlet />}
         </main>
      </>
   )
}

export default HomeLayout