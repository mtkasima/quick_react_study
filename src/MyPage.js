import React, { Component } from 'react';

export default class MyPage extends Component {
  render(){
    const page_num = this.props.match.params.page;
    return(
      <div>{page_num}ページ目</div>
    );
  }
}
