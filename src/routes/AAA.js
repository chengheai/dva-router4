import DDD from './DDD'
import GGG from './GGG'
import React, { Component } from 'react';
// import { connect } from 'dva';
import { Link, Route, Switch } from 'dva/router';


class AAA extends Component {
  render() {
    return (
      <div>
        子路由aaa的组件,也是第二层嵌套路由的外层包裹组件，链接aaa路由和下边的ddd包裹组件
        <p><Link to='/bbb'>到bbb</Link></p>
        <DDD>
          <Switch>
            <Route path="/aaa/fff" render={() => (<div>这是第一个三层嵌套的组件啦fff</div>)} />
            <Route path="/aaa/eee" render={() => (<div>这是第二个三层嵌套的组件啦eee</div>)} />
            <Route path="/aaa/ggg" component={GGG} />
          </Switch>
        </DDD>
        {/* {this.props.children} */}
      </div>
    )
  }
}
AAA.propTypes = {
};
// export default connect()(AAA);
export default AAA