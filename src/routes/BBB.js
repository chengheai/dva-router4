import React, { Component } from 'react';
// import { connect } from 'dva';
import { Link } from 'dva/router';


class BBB extends Component {
  render(){
    return (
    <div>
      子路由bbb,一个简单的路由组件
      <p>
        <Link to='/aaa'>到aaa</Link>
      </p>
    </div>
  )
  }
  
}
// export default connect()(BBB);
export default BBB