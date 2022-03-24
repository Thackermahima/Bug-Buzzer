import React from 'react'
import { AppBar, Toolbar, Button, Typography, Grid} from '@mui/material'
import { Box } from '@mui/system'
import DashboardNav from './DashboardNav';
import Intro from '../components/Intro';
import Bugs from '../components/Bugs';
import QandAList from '../components/QandAList';
import Compaigns from '../components/Compaigns';
const Dashboard = () => {
  return (
      <>
     <DashboardNav />
    <Intro />
    <Bugs />
    <QandAList />
    <Compaigns />
      
      </>   
 
    )
}

export default Dashboard