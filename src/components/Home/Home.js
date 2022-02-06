import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
         };
        this.handleSearchValue = this.handleSearchValue.bind(this)
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                users: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }
    handleSearchValue = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
    }

    renderUserList(user) {
        const { name,username,email,phone } = user;
        return(
            <div className='User'>
                <p><strong>Useruame:</strong> {username}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>
        );
    }

    render() {
        const { users } = this.state;
        // console.log("Api Data comming or not! ===|>>>",items);
        return (
            <div className='HomeWapper'>
                <div className='SerachBox'>
                    <input type="text" placeholder='Search' onChange={this.handleSearchValue} />
                </div>
                <div className='UserInfo'>
                    {
                        users.map(user => this.renderUserList(user))
                    }
               </div>
            </div>
        );
    }
}

export default Home;