import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink> |
    <NavLink exact activeClassName="active" to="/product">Product</NavLink> |
    <NavLink activeClassName="active" to="/product/:id">Product Page ID</NavLink> |
    <NavLink exact activeClassName="active" to="/server">Server</NavLink> |
    <NavLink exact activeClassName="active" to="/server/Details">Server Details</NavLink>
  </nav>
)
const HomePage = () => (
  <Fragment>
    <div>Home Page</div>

  </Fragment>
)
const ProductsPage = () => (
  <Fragment>
    <div>Products Page</div>

  </Fragment>
)
const ProructsPage_ID = (props) => {
  console.log(props)
  return (<Fragment>
    <div>Products Page ID:12</div>
    <div>{props.match.url}</div>
  </Fragment>)
}
const ServerPage = () => (
  <Fragment>
    <div>Server Page</div>

  </Fragment>
)
const ServerPageDetails = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div>params:{props.match.params.id}</div>
    </Fragment>
  )
}
const NotFoundPage = () => (
  <Fragment>
    <div>NotFound Page</div>

  </Fragment>
)

const AppRouter = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route  path="/product/:id" component={ProructsPage_ID} />
      <Route exact path="/product" component={ProductsPage} />
      <Route exact path="/server" component={ServerPage} />
      <Route  path="/server/Details" component={ServerPageDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter