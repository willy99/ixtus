import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import { Contact } from "./pages/contact/Contact"
import { home_folder } from "./assets/data/constants"
import {append} from "./components/i18n/i18n";

const App = () => {

  let locale = localStorage.getItem('userLanguage');
  if (!locale) {
    locale = 'ua';
  }
  append(require(`./localization/${locale}.json`));

  return (
    <>
      <Router basename={`${home_folder}`}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/news/:id' render={(props) => <Home {...props} /> }  />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
};
export default App
