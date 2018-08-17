import React, { Component } from 'react';
import { Link } from 'dva/router';
// import { connect } from 'dva';


class DDD extends Component {
  render() {
    return (
      <div>
        包裹组件DDD，内部是自己的内容和嵌套路由,一般来说aaa组件和ddd组件中，只要有一个写内容就可以了，所以，这里一般不写内容，都写到aaa中去
        <div>
          <p><Link to='/aaa/fff'>fff</Link></p>
          <p><Link to='/aaa/eee'>eee</Link></p>
          <p><Link to='/aaa/ggg'>ggg</Link></p>
        </div>
        {this.props.children}
      </div>
    )
  }
}

// export default connect()(DDD);
export default DDD