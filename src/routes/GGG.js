import HHH from './HHH'
import React, { Component } from 'react';
import { Link, Route, Switch } from 'dva/router';
// import { connect } from 'dva';


class GGG extends Component {
  render() {
    const {path} = this.props.match
    return (
      <div>
        <p>又是一个连接组件ggg</p>
        <p><Link to='/aaa/ggg/iii'>iii</Link></p>
        <p><Link to='/aaa/ggg/jjj'>jjj</Link></p>
        <p><Link to='/aaa/ggg/kkk'>kkk</Link></p>
        <HHH>
          <Switch>
            <Route path='/aaa/ggg/iii' render={() => (<div>第四代嵌套组件的内容，一般深度也就这样啦iii,主要看看一下match的用法</div>)} />
            <Route path={`${path}/jjj`} render={() => (<div>第四代嵌套组件的内容，一般深度也就这样啦jjj</div>)} />
            <Route path={`${path}/kkk`} render={() => (<div>第四代嵌套组件的内容，一般深度也就这样啦kkk</div>)} />
          </Switch>
        </HHH>
      </div>
    )
  }
}
// export default connect()(GGG);
export default GGG