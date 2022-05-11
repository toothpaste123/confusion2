import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId})
  }

  render() {
    const HomePage = () => {
        return (
            <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }  
    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu comments={this.state.comments} dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishId) => this.onDishSelect(dishId)} />} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
