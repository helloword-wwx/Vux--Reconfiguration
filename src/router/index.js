import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header';
import Loan from '../components/Loan';
import Card from '../components/Card';
import CardSearch from '../components/CardSearch';
import personally from '../components/personally';
import Credit from '../components/Credit';
import LoanEdit from '../components/LoanEdit'
import Network from '../components/Network'
import CreditAdd from '../components/CreditAdd'
import CardAdd from '../components/CardAdd'
import personallyAdd from '../components/personallyAdd'
import login from '../components/login'
import register from '../components/register'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import forgetpsd from '../components/forgetpsd'
import AddressEdit from '../components/AddressEdit'
// 懒加载 ----页面主
const Index = resolve => require(['@/components/Loan'], resolve)


Vue.use(Router)

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    { path: '/', component: Index},
    {
      path:"/Loan",
      name:Loan,
      component:Loan
    },
    {
      path:"/Header",
      name:Header,
      component:Header
    },
    {
      path:"/Card",
      name:Card,
      component:Card
    },
    {
      path:"/CardSearch",
      name:CardSearch,
      component:CardSearch
    },
    {
      path:"/personally",
      name:personally,
      component:personally
    },
    {
      path:"/Credit",
      name:Credit,
      component:Credit
    },
    {
      path:"/LoanEdit",
      name:LoanEdit,
      component:LoanEdit
    },
    {
      path:"/Network",
      name:Network,
      component:Network
    },
    {
      path:"/CardAdd",
      name:CardAdd,
      component:CardAdd
    },
    {
      path:"/CreditAdd",
      name:CreditAdd,
      component:CreditAdd
    },
    {
      path:"/personallyAdd",
      name:personallyAdd,
      component:personallyAdd
    },
    {
      path:"/login",
      name:login,
      component:login
    },
    {
      path:"/register",
      name:register,
      component:register
    },
    {
      path:"/forgetpsd",
      name:forgetpsd,
      component:forgetpsd
    },
    {
      path:"/AboutMe",
      name:AboutMe,
      component:AboutMe
    },
    {
      path:"/Address",
      name:Address,
      component:Address
    },
    {
      path:"/AddressEdit",
      name:AddressEdit,
      component:AddressEdit
    }
  ]
})
